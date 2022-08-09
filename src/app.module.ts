import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:EcEmFknZLhi3LRnH@cluster0.sagi9da.mongodb.net/?retryWrites=true&w=majority',
    ),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    ApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
