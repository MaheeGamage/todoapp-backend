import { Test, TestingModule } from '@nestjs/testing';
import { TodoTasksService } from './todo-tasks.service';

describe('TodoTasksService', () => {
  let service: TodoTasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoTasksService],
    }).compile();

    service = module.get<TodoTasksService>(TodoTasksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
