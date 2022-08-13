import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoTaskDto } from './create-todo-task.dto';

export class UpdateTodoTaskDto extends PartialType(CreateTodoTaskDto) {}
