import { Test, TestingModule } from '@nestjs/testing';
import { TodoTasksController } from './todo-tasks.controller';
import { TodoTasksService } from './todo-tasks.service';

describe('TodoTasksController', () => {
  let controller: TodoTasksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodoTasksController],
      providers: [TodoTasksService],
    }).compile();

    controller = module.get<TodoTasksController>(TodoTasksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
