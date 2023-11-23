import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CheckoutDTO } from './checkout.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('checkout')
  checkout(@Body() data: CheckoutDTO) {
    return this.appService.checkout(data);
  }
}
