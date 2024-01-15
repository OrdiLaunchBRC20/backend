import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('check')
  check(@Query('wallet') wallet: any): boolean {
    return this.appService.check(wallet);
  }
}
