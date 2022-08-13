import { Injectable } from '@nestjs/common';
import { Prisma, Task } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateTodoTaskDto } from './dto/update-todo-task.dto';

@Injectable()
export class TodoTasksService {
  constructor(private readonly prisma: PrismaService) { }

  async create(data: Prisma.TaskCreateInput): Promise<Task> {
    return this.prisma.task.create({ data });
  }

  async findAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TaskWhereUniqueInput;
    where?: Prisma.TaskWhereInput;
    orderBy?: Prisma.TaskOrderByWithRelationInput;
  }): Promise<Task[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.task.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOne(taskWhereUniqueInput: Prisma.TaskWhereUniqueInput): Promise<Task | null> {
    return this.prisma.task.findUnique({
      where: taskWhereUniqueInput,
    });
  }

  update(id: number, updateTodoTaskDto: UpdateTodoTaskDto) {
    return `This action updates a #${id} todoTask`;
  }

  remove(id: number) {
    return `This action removes a #${id} todoTask`;
  }
}
