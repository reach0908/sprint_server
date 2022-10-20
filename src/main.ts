import { NestApplication, NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
	const app: NestApplication = await NestFactory.create(AppModule);
	const logger = new Logger();
	await app.listen(3000);
	logger.log('app start');
}
bootstrap();
