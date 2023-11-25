import { Injectable } from '@nestjs/common';
import { WorkoutRepository } from './workout.repository';
import { Workout } from '@entities/workout.entity';
import { WorkoutCreateDto } from './dto/workout-create.dto';
import { WorkoutUpdateDto } from './dto/workout-update.dto';

@Injectable()
export class WorkoutService {
  constructor(private readonly repository: WorkoutRepository) {}

  public getEntityById(id: number): Promise<Workout> {
    return this.repository.oneById(id);
  }

  public getEntities(): Promise<Workout[]> {
    return this.repository.all();
  }

  public createEntity(dto: WorkoutCreateDto): Promise<Workout> {
    return this.repository.create(dto);
  }

  public updateEntity(id: number, dto: WorkoutUpdateDto): Promise<Workout> {
    return this.repository.update(id, dto);
  }

  public removeEntity(id: number): Promise<Workout> {
    return this.repository.remove(id);
  }
}
