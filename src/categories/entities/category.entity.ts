import { IsNotEmpty, IsString } from 'class-validator';

export class Category {
  @IsNotEmpty()
  id: string;

  @IsString()
  name?: string;
}
