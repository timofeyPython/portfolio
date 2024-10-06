import { SequelizeModule } from '@nestjs/sequelize';
 
export const dbconnection = SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'vla-ad01-app16',
    port: 5432,
    username: 'monitor',
    password: 'consumer',
    database: 'monitoring',
    autoLoadModels: true,
    synchronize: true,
    logging: false
})

