import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { Task } from './task.entity';

@Controller('tasks')
export class TasksController {
    constructor(private taskService: TasksService) { }

    // @Get()
    // getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto) {
    //     if (Object.keys(filterDto).length) {
    //         return this.taskService.getTasksWithFilters(filterDto);
    //     } else {
    //         return this.taskService.getAllTasks();
    //     }
    // }

    @Get('/:id')
    getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
        return this.taskService.getTaskById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
        return this.taskService.createTask(createTaskDto);
    }

    // @Delete('/:id')
    // deleteTask(@Param() id: string): void {
    //     this.taskService.deleteTask(id);
    // }

    // @Patch('/:id/status')
    // updateTaskStatus(@Param('id') id: string, @Body('status', TaskStatusValidationPipe) status: TaskStatus) {
    //     return this.taskService.updateTaskStatus(id, status)
    // }

}