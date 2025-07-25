import { IsBoolean, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsBoolean()
  isCompleted: boolean;

  @IsString()
  description: string;

  @IsString()
  categoryName: string;
}
