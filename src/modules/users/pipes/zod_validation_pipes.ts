import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { ZodSchema } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: any) {
    try {
      const result = this.schema.parse(value);
      return result;

      // if check safeParse => success
      // const result = this.schema.safeParse(value);
      // if (result.success) return result;
    } catch (error) {
      throw new BadRequestException('Validation failed', {
        cause: error,
        description: error.format(),
      });
    }
  }
}
