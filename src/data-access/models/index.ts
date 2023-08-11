import { createUserModel, UserInstance, UserModelType } from './user'; // Import the types
import sequelize from '..';

const UserModel: UserModelType = createUserModel(sequelize);

UserModel.sync();

export default UserModel;

export { UserInstance };
