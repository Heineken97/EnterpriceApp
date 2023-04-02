import { Observable } from 'rxjs';
import { UseCase } from 'src/base/use-case';
import { UserModel } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';
export class UserRegisterUseCase implements UseCase<{ phoneNum: string; password: string }, UserModel> {
    constructor(private userRepository: UserRepository) { }
    execute(
        params: { fullName: string,username: string,phoneNum: string, password: string },
    ): Observable<UserModel> {
        return this.userRepository.register(params);
    }
}
