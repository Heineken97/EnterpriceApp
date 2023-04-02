import { Component } from '@angular/core';
import { UserLoginUseCase } from 'src/domain/usecases/user-login.usecase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'enterpriceApp';
  constructor(private loginUseCase:UserLoginUseCase){}
  getUser(){
    this.loginUseCase
    .execute({username: '', password: '' })
    .subscribe((res) => console.log(res))
  }
}
