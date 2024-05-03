import { registerAs } from '@nestjs/config';
import { config as dotenvConfig } from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenvConfig({ path: '.env' });

const config = {
  type: 'postgres',
  host: 'dpg-cnqobvi1hbls73drveeg-a.singapore-postgres.render.com', // Only the hostname here
  port: 5432,
  username: 'ambujsingh',
  password: 'Zy1Wl2skAUZhgc4TEb9HVtHr0XYL4fO7',
  database: 'ambujsingh',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/migrations/*{.ts,.js}'],
  autoLoadEntities: true,
  synchronize: false,
  ssl: true, // Enable SSL/TLS
  cache: true,
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
