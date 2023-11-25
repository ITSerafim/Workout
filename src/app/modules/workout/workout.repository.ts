import { Workout } from '@entities/workout.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class WorkoutRepository {
  constructor(
    @InjectRepository(Workout)
    private readonly repository: Repository<Workout>,
  ) {}

  public oneById(id: number): Promise<Workout> {
    return this.repository.findOneBy({ id });
  }

  public all(): Promise<Workout[]> {
    return this.repository.find();
  }
}
