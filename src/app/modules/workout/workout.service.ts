import { Injectable } from '@nestjs/common';
import { WorkoutRepository } from './workout.repository';
import { Workout } from '@entities/workout.entity';

@Injectable()
export class WorkoutService {
  constructor(private readonly repository: WorkoutRepository) {}

  public getEntityById(id: number): Promise<Workout> {
    return this.repository.oneById(id);
  }

  public getEntities(): Promise<Workout[]> {
    return this.repository.all();
  }
}
