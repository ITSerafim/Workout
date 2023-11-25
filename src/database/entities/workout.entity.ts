import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'workouts' })
export class Workout extends BaseEntity {
  @Column({ type: 'character varying' })
  @ApiProperty({ example: 'Тренировка 1', description: 'Название тренировки' })
  @IsString()
  public name: string;

  @Column({ type: 'character varying', nullable: true })
  @ApiProperty({
    example: 'Описание для тренировки 1',
    description: 'Описание тренировки',
  })
  @IsOptional()
  @IsString()
  public description: string;
}
