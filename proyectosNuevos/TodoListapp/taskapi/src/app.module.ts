/* import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/task.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:3000/tasksdb'),TaskModule],
  controllers: [],
  providers: [],
  
})
export class AppModule {}
*/
import { Module } from '@nestjs/common';
import { TaskModule } from './tasks/task.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TaskModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nestjs'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}