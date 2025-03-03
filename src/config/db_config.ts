import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const pgConfig: PostgresConnectionOptions = {
  url: 'postgresql://neondb_owner:npg_h1caUWONY6Zr@ep-square-hall-a1zglrpd-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require',
  type: 'postgres',
  port: 3306,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
