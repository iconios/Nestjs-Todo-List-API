import { Injectable } from '@nestjs/common';
import { CategoriesService } from 'src/categories/categories.service';
import { Category } from 'src/categories/entities/category.entity';
import { CreateTaskDto } from 'src/task/dto/create-task.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UtilsService {
  constructor(private readonly categoriesService: CategoriesService) {}

  validateCategoryName({ categoryName }: { categoryName: string }) {
    const category = this.categoriesService.getCategoryByName(categoryName);
    console.log('Category name ', category);
    return category;
  }

  CreateTaskEntity(createTaskDto: CreateTaskDto, category: Category) {
    const newTask = {
      id: uuidv4(),
      title: createTaskDto.title,
      description: createTaskDto.description,
      isCompleted: createTaskDto.isCompleted,
      categoryId: category.id,
    };
    return newTask;
  }
}
