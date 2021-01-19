import { Injectable } from '@angular/core';
import { ConfigService } from '../config/config.service'

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(private configService: ConfigService) { }

  log(msg: string) {
    if (this.configService.showLogs) {
      console.log(msg);
    }
  }
}
