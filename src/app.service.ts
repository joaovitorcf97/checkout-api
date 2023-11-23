import { Injectable } from '@nestjs/common';
import { CheckoutDTO } from './checkout.dto';

@Injectable()
export class AppService {
  checkout(data: CheckoutDTO) {
    return {
      message: 'Plano contratodo com sucesso',
      data: data,
    };
  }
}
