import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export default function dbConfig(): PostgresConnectionOptions {
  return {
    url: process.env.DATABASE_URL,
    type: 'postgres',
    port: +process.env.DATABASE_PORT!,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: true,
  };
}
