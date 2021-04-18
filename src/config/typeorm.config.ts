import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'nawito',
    password: '1189',
    database: 'taskmangement',
    entities: [__dirname + '/../**/*.entity.js'],
    synchronize: true,
}