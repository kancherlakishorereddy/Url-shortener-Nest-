import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MyrlModule } from './myrl/myrl.module';

@Module({
  imports: [
    MyrlModule,
    MongooseModule.forRoot(
      'mongoDB URI',
      { useNewUrlParser: true, useUnifiedTopology: true },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
