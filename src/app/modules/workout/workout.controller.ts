import { Workout } from '@entities/workout.entity';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { WorkoutService } from './workout.service';
import { WorkoutCreateDto } from './dto/workout-create.dto';
import { WorkoutUpdateDto } from './dto/workout-update.dto';

@ApiTags('Тренировки')
@Controller('workout')
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

  @ApiOperation({ summary: 'Создание тренировки' })
  @ApiResponse({ status: 201, type: Workout })
  @Post()
  public create(@Body() body: WorkoutCreateDto): Promise<Workout> {
    return this.service.createEntity(body);
  }

  @ApiOperation({ summary: 'Обновление тренировки' })
  @ApiResponse({ status: 200, type: Workout })
  @Put('/:id')
  public update(
    @Param('id') id: number,
    @Body() body: WorkoutUpdateDto,
  ): Promise<Workout> {
    return this.service.updateEntity(id, body);
  }

  @ApiOperation({ summary: 'Удаление тренировки' })
  @ApiResponse({ status: 200, type: Workout })
  @Delete('/:id')
  public remove(@Param('id') id: number): Promise<Workout> {
    return this.service.removeEntity(id);
  }
}
