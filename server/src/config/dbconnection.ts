import { SequelizeModule } from '@nestjs/sequelize';
 
export const dbconnection = SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'monitor',
    password: 'consumer',
    database: 'monitoring',
    autoLoadModels: true,
    synchronize: true,
    logging: false
})

