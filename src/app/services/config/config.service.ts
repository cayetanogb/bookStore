import { Injectable } from '@angular/core';
import { LoggerService } from './../logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  pathImg = './assets/img';
  public showLogs: boolean = true;

  constructor(private loggerService: LoggerService) {
    loggerService.log('llamado constructor configService');
  }
}
