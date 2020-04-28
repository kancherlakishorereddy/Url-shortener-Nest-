import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MyrlService } from './myrl.service';
import { MyrlController } from './myrl.controller';
import { MyrlSchema } from './schemas/myrl.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Myrl', schema: MyrlSchema }])],
  controllers: [MyrlController],
  providers: [MyrlService],
  exports: [MyrlService],
})
export class MyrlModule {}
