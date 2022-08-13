import { Module } from '@nestjs/common';
import { TodoTasksService } from './todo-tasks.service';
import { TodoTasksController } from './todo-tasks.controller';

@Module({
  controllers: [TodoTasksController],
  providers: [TodoTasksService]
})
export class TodoTasksModule {}
