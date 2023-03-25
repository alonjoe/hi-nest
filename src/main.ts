import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, // 파라미터는 기본적으로 string 타입이지만, 이 조건으로 파라미터 타입을 수정할 수 있음.
    }),
  );
  await app.listen(3000);
}
bootstrap();
