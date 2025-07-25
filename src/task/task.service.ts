import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';
import { CategoriesService } from 'src/categories/categories.service';
import { UtilsService } from 'src/utils/utils.service';

@Injectable()
@UsePipes(new ValidationPipe())
export class TaskService {
  constructor(
    private readonly categoriesService: CategoriesService,
    private readonly utilsService: UtilsService,
  ) {}
  protected tasks: Task[] = [];

  createTask(createTaskDto: CreateTaskDto): Task {
    console.log('Received new task details ', createTaskDto);
    const category = this.utilsService.validateCategoryName(createTaskDto);

    // If the category name doesn't exist, create the category before creating new task else
    // create the new task straight away
    if (!category) {
      const createdCategory = this.categoriesService.createCategory({
        name: createTaskDto.categoryName,
      });
      const newTask = this.utilsService.CreateTaskEntity(
        createTaskDto,
        createdCategory,
      );
      console.log('Details of new task to push to array: ', newTask);
      this.tasks.push(newTask);
      console.log('Tasks in the array ', this.tasks);
      return newTask;
    }

    const newTask = this.utilsService.CreateTaskEntity(createTaskDto, category);
    this.tasks.push(newTask);
    console.log('Tasks in the array ', this.tasks);
    return newTask;
  }

  findAllTasks(): Task[] {
    return this.tasks;
  }

  findOneTask(id: string): Task | null {
    const todo = this.tasks.find((task) => task.id === id);
    return todo || null;
  }

  updateTask(id: string, updateTaskDto: UpdateTaskDto): Task {
    // Check if the task with the ID exists
    const todo = this.tasks.find((task) => task.id === id);

    // Check if the category exists
    const category = this.categoriesService.getCategoryByName(
      updateTaskDto.categoryName,
    );

    // If the task ID and category ID doesn't exist, throw an exception
    if (!todo || !category)
      throw new NotFoundException('Task or category ID does not exist');

    // If the task ID exists, Update the task details
    const updateTask: Task = {
      id,
      title: updateTaskDto.title,
      description: updateTaskDto.description,
      isCompleted: updateTaskDto.isCompleted,
      categoryId: category?.id,
    };
    this.tasks = this.tasks.filter((todo) => todo.id !== id);
    this.tasks.push(updateTask);

    // Send the updated task to the caller
    return updateTask;
  }

  removeTask(id: string): boolean {
    const initialLength = this.tasks.length;
    this.tasks = this.tasks.filter((todo) => todo.id !== id);
    return initialLength > this.tasks.length;
  }

  findTaskById(id: string): Task | null {
    return this.tasks.find((task) => task.id === id) ?? null;
  }

  findTasksByCategory(id?: string, name?: string): Task[] | null {
    if (!id && !name)
      throw new BadRequestException(
        'Both id and name cannot be empty for a category',
      );
    if (id) {
      return this.tasks.filter((task) => task.categoryId === id);
    }
    if (name) {
      const category = this.categoriesService.getCategoryByName(name);
      if (!category) throw new NotFoundException(`Category ${name} not found`);
      return (
        this.tasks.filter((task) => task.categoryId === category.id) ?? null
      );
    }
  }
}
