import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const _config = {
  title: 'Workout Docs (Admin, CRM)',
  description: 'Документация ко всем методам системы Workout',
  version: '1.0.0',
  tag: 'workout',
  url: 'api/docs',
};

const config = new DocumentBuilder()
  .setTitle(_config.title)
  .setDescription(_config.description)
  .setVersion(_config.version)
  .addTag(_config.tag)
  .build();

export const swagger = (app: INestApplication<any>) => {
  const doc = SwaggerModule.createDocument(app, config);
  return SwaggerModule.setup(_config.url, app, doc);
};
