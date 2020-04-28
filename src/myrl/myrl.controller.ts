import { Controller, Post, Body } from '@nestjs/common';
import { MyrlService } from './myrl.service';
import { CreateMyrlDto } from './dto/myrl.dto';

@Controller('myrl')
export class MyrlController {
  constructor(private readonly myrlService: MyrlService) {}
  @Post()
  modify(@Body() data: CreateMyrlDto) {
    return this.myrlService.modify(data);
  }
}
