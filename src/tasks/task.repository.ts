import { EntityRepository, Repository } from "typeorm";
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from "./task-status.enum";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {

    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        const { title, description } = createTaskDto
        const result = await Task.create({
            title,
            description,
            status: TaskStatus.OPEN
        });
        await result.save();
        return result;
    }
}