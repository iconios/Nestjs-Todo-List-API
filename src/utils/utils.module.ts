import { Module } from '@nestjs/common';
import { UtilsService } from './utils.service';
import { CategoriesModule } from 'src/categories/categories.module';

@Module({
  providers: [UtilsService],
  imports: [CategoriesModule],
  exports: [UtilsService],
})
export class UtilsModule {}
