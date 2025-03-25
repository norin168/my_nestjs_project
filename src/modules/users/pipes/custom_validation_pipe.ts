import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class CustomValidationPipe implements PipeTransform<any> {
  constructor(private readonly type: any) {}

  async transform(value: any, metadata: ArgumentMetadata) {
    // Convert plain object into an instance of the expected class
    const object = plainToInstance(this.type, value);

    // Validate the object against the class-validator decorators
    const errors = await validate(object);

    if (errors.length > 0) {
      // Optionally, you can transform the errors into a custom message
      throw new BadRequestException('Validation failed', { cause: errors });
    }

    return object;
  }
}
