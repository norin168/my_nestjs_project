// A basic service with a single method.
// Business Logic

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello My Beb';
  }
}
