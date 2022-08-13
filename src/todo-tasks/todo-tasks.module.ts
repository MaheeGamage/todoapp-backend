import { Module } from '@nestjs/common';
import { TodoTasksService } from './todo-tasks.service';
import { TodoTasksController } from './todo-tasks.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [TodoTasksController],
  providers: [TodoTasksService, PrismaService]
})
export class TodoTasksModule {}
