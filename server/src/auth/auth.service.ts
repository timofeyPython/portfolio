import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConformitiesService } from 'src/conformities/conformities.service';
import { Users } from 'src/users/users.model';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
      private usersServise: UsersService, 
      private conformitiesService: ConformitiesService
    ){}

    async signIn(username: string, pass: string): Promise<any> {
      const user = await this.usersServise.findOne(username)
      if (!user)
        throw new UnauthorizedException(`Пользователь ${username} нет зарегестрирован !`)

      // easy check  
      if (user && user.hash_password !== pass) 
        throw new UnauthorizedException(`Неверный пароль !`)

      const rights = await this.conformitiesService.findAll(user.id)

      return {
         id: user.id,
         login: user.login,
         grId: user.grId,
         info: user.info,
         rights: rights.map((right)=> right.rights.name)
       }
    }

    async check(login: string): Promise<{roles: Array<string>}> {

      const user = await this.usersServise.findOne(login)

      if (!user)
        throw new UnauthorizedException(`Пользователь не найден в БД !`)

      const rights = await this.conformitiesService.findAll(user.id)
      
      return {
        roles: rights.map((right)=> right.rights.name)
      }
    }
}
