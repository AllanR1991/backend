import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });//necessario habilitar o cors para permitir requisições de origens diferentes 
  await app.listen(4000);
}
bootstrap();
