import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodoTasksService } from './todo-tasks.service';
import { CreateTodoTaskDto } from './dto/create-todo-task.dto';
import { UpdateTodoTaskDto } from './dto/update-todo-task.dto';

@Controller('todo-tasks')
export class TodoTasksController {
  constructor(private readonly todoTasksService: TodoTasksService) {}

  @Post()
  create(@Body() createTodoTaskDto: CreateTodoTaskDto) {
    return this.todoTasksService.create(createTodoTaskDto);
  }

  @Get()
  findAll() {
    return this.todoTasksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoTasksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodoTaskDto: UpdateTodoTaskDto) {
    return this.todoTasksService.update(+id, updateTodoTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoTasksService.remove(+id);
  }
}
