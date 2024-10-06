import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from './roles.decorator';
import { ERights } from 'src/types/enum';
import { Conformities } from 'src/conformities/conformities.model';
import { Rights } from 'src/rights/rights.model';
import { Op } from 'sequelize';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  async canActivate(
    context: ExecutionContext,
  ):  Promise<boolean> {

    const [req, res, next] = context.getArgs()
    const roles = this.reflector.get(Roles, context.getHandler())
  
    if (!req.session?.user?.rights) 
      return false
    
    const findRole = req.session.user.rights.find((role: string)=> roles.find((r)=> role === r )) 
    if (!findRole) 
      throw new UnauthorizedException(`Нет прав! ${roles}`)
    
    if (ERights.EMPL && ERights.H_O_D) {
      const user = req.session.user
      const addedLikeOperator = [req.query.gr].map((word) => ({ [Op.iLike]: `%${word || ""}%` })) //this line will add iLike operator for each string
 
      const right = await Conformities.findOne({
        include: [
          {
            model: Rights,
            where: {
              name: {[Op.or] : [ERights.EMPL, ERights.H_O_D]}
            }
          }
        ],
        where: {
          userId: user.id,
          'details.array':  {[Op.and] : addedLikeOperator}
        }
      })
 
      if (!right) 
        return false
    }
    return true;
  }
}