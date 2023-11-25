import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class WorkoutUpdateDto {
  @ApiProperty({
    example: 'Тренировка',
    description: 'Наименование тренировки',
  })
  @IsString({ message: 'Должно быть строкой!' })
  public name: string;

  @ApiProperty({
    example: 'Описание для тренировки',
    description: 'Описание тренировки',
  })
  @IsString({ message: 'Должно быть строкой!' })
  public description: string;
}
