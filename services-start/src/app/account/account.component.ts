import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../Logging.component';
import { AccountService } from '../accounts.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  constructor(private loggingService: LoggingService,
    private accountService: AccountService) { };

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status)
    
  }
}
