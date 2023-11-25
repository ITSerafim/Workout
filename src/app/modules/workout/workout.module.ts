import { Module } from '@nestjs/common';
import { WorkoutController } from './workout.controller';
import { WorkoutService } from './workout.service';
import { WorkoutRepository } from './workout.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workout } from '@entities/workout.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Workout])],
  providers: [WorkoutService, WorkoutRepository],
  controllers: [WorkoutController],
})
export class WorkoutModule {}
