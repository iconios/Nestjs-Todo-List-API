import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { UtilsModule } from 'src/utils/utils.module';
import { CategoriesModule } from 'src/categories/categories.module';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
  imports: [UtilsModule, CategoriesModule],
})
export class TaskModule {}
