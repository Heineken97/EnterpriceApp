import { Mapper } from 'src/base/mapper';
import { UserModel } from 'src/domain/models/user.model';
import { UserEntity } from '../entities/user-entity';


export class UserImplementationRepositoryMapper extends Mapper<UserEntity, UserModel> {
    mapFrom(param: UserEntity): UserModel {
        return {
            id: param.Id,
            fullName: param.FullName,
            username: param.UserName,
            email: param.Email,
            phoneNum: param.PhoneNum,
            createdAt: param.CreatedAt
        };
    }
    mapTo(param: UserModel): UserEntity {
        return {
            Id: param.id,
            FullName: param.fullName,
            UserName: param.username,
            Email: param.email,
            PhoneNum: param.phoneNum,
            CreatedAt: param.createdAt
        }
    }
}