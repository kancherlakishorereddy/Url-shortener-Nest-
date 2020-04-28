import { Controller, Get, Param, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getIndex(): string {
    return this.appService.getIndex();
  }
  @Get(':urlCode')
  @Redirect('https://my-rl.herokuapp.com', 302)
  async getUrl(@Param('urlCode') urlCode) {
    return { url: await this.appService.getUrl(urlCode) };
  }
}
