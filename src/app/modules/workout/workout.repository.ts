import { Workout } from '@entities/workout.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WorkoutCreateDto } from './dto/workout-create.dto';
import { WorkoutUpdateDto } from './dto/workout-update.dto';

@Injectable()
export class WorkoutRepository {
  constructor(
    @InjectRepository(Workout)
    private readonly repository: Repository<Workout>,
  ) {}

  public async oneById(id: number): Promise<Workout> {
    return this.repository.findOneBy({ id });
  }

  public async all(): Promise<Workout[]> {
    return this.repository.find();
  }

  public async create(dto: WorkoutCreateDto): Promise<Workout> {
    return await this.repository.save(dto);
  }

  public async update(id: number, dto: WorkoutUpdateDto): Promise<Workout> {
    await this.repository.update(id, {
      name: dto.name,
      description: dto.description,
    });

    const updatedValue = await this.oneById(id);

    return await this.repository.save(updatedValue);
  }

  public async remove(id: number): Promise<Workout> {
    const deletedValue = await this.oneById(id);
    return await this.repository.remove(deletedValue);
  }
}
