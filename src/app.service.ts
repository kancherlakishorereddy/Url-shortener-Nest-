import { Injectable } from '@nestjs/common';
import { MyrlService } from './myrl/myrl.service';

@Injectable()
export class AppService {
  constructor(private readonly myrlService: MyrlService) {}
  getIndex(): string {
    return 'Index page';
  }
  async getUrl(urlCode) {
    return await this.myrlService.findOne(urlCode);
  }
}
