import { NestFactory }      from '@nestjs/core';

import { ApiGatewayModule } from 'apps/api-gateway/src/api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);
  await app.listen(3000);
}
bootstrap();
