import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesService } from './categories/categories.service';
import { CategoriesModule } from './categories/categories.module';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';
import { UtilsModule } from './utils/utils.module';

@Module({
  imports: [TaskModule, CategoriesModule, UtilsModule],
  controllers: [AppController, CategoriesController, TaskController],
  providers: [AppService, CategoriesService, TaskService],
})
export class AppModule {}
