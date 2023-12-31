import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swagger } from './configs/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  swagger(app);

  await app.listen(3000);
}
bootstrap();
