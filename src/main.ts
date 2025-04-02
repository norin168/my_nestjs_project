import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { LogInterceptor } from './shared/log_interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: false,
  });

  app.useGlobalPipes(new ValidationPipe());

  // Apply the LoggingInterceptor globally
  app.useGlobalInterceptors(new LogInterceptor());

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
