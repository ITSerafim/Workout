import { Workout } from '@entities/workout.entity';
import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { WorkoutService } from './workout.service';

@ApiTags('Тренировки')
@Controller('workouts')
export class WorkoutController {
  constructor(private readonly service: WorkoutService) {}

  @ApiOperation({ summary: 'Получение тренировок' })
  @ApiResponse({ status: 200, type: [Workout] })
  @Get()
  public getAll(): Promise<Workout[]> {
    return this.service.getEntities();
  }

  @ApiOperation({ summary: 'Получение тренировки' })
  @ApiResponse({ status: 200, type: Workout })
  @Get('/:id')
  public getOneById(@Param('id') id: number): Promise<Workout> {
    return this.service.getEntityById(id);
  }
}
