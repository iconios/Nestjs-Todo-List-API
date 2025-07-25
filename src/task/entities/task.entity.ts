import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class Task {
  @IsNotEmpty()
  id: string;

  @IsString()
  title: string;

  @IsBoolean()
  isCompleted: boolean;

  @IsString()
  description: string;

  @IsString()
  categoryId: string;
}
