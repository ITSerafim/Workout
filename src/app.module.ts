import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { WorkoutModule } from '@modules/workout/workout.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, WorkoutModule],
  controllers: [AppController],
})
export class AppModule {}
