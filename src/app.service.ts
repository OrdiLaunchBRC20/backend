import { Injectable } from '@nestjs/common';
import { wallets } from './data';

@Injectable()
export class AppService {
  check(wallet: any): boolean {
    return (
      wallets.find((item: any) => new RegExp(`^${item}$`, 'i').test(wallet)) !=
      null
    );
  }
}
