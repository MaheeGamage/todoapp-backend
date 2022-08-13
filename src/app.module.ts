import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoTasksModule } from './todo-tasks/todo-tasks.module';

@Module({
  imports: [TodoTasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
