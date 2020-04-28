import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MyrlModule } from './myrl/myrl.module';

@Module({
  imports: [
    MyrlModule,
    MongooseModule.forRoot(
      'mongodb+srv://voopik:voopik@cluster0-j9k2l.mongodb.net/test?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
