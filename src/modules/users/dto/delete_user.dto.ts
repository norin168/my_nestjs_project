// delete-user.dto.ts
import { IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class DeleteUserDto {
  @IsNumber({}, { message: 'Id must be a number' })
  @Type(() => Number)
  id: number;
}
