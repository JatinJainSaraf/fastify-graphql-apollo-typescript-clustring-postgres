import cluster, {Worker} from 'node:cluster';
import os from 'node:os';
import { Server } from './server';

if (cluster.isPrimary) {
  console.log('inMaster');
  
  const numCPUs = os.cpus().length;
  const maxReqLimitCount = 10; // Set your maximum request limit count here

  const workers: Worker[] = [];

  // Create a function to handle worker creation
  const createWorker = () => {
    const worker = cluster.fork();
    workers.push(worker);

    // Listen for worker's online event
    worker.on('online', () => {
      console.log(`Worker ${worker.process.pid} is online`);
    });

    // Listen for worker's exit event
    worker.on('exit', (code, signal) => {
      console.log(`Worker ${worker.process.pid} died`);
      // Remove the worker from the workers array
      const index = workers.indexOf(worker);
      if (index !== -1) {
        workers.splice(index, 1);
      }
    });
  };

  // Fork workers based on the number of CPUs
  createWorker()

  // Listen for incoming requests to determine worker scaling
  cluster.on('message', (worker, message) => {
    if (message.requestCount >= maxReqLimitCount && workers.length < numCPUs) {
      createWorker();
    }
  });
} else {
  const server = new Server(7001);
  server.start();
}
