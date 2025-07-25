import { Injectable } from '@nestjs/common';
import { Category } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { v4 as uuidv4 } from 'uuid';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  private categories: Category[] = [];

  createCategory(createCategoryDto: CreateCategoryDto): Category {
    const newCategory = {
      id: uuidv4(),
      name: createCategoryDto.name,
    };
    this.categories.push(newCategory);
    return newCategory;
  }

  findAllCategories(): Category[] {
    return this.categories;
  }

  updateCategory(id: string, updateCategoryDto: UpdateCategoryDto): Category {
    const category = this.categories.find((heading) => heading.id === id);
    if (!category) return null;
    const updateCategory = {
      id,
      ...updateCategoryDto,
    };
    this.categories = this.categories.filter((todo) => todo.id !== id);
    this.categories.push(updateCategory);
    return updateCategory;
  }

  getCategoryById(id: string): Category | null {
    return this.categories.find((heading) => heading.id === id);
  }

  getCategoryByName(name: string): Category | null {
    return this.categories.find((heading) => heading.name === name);
  }
}
