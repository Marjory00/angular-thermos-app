import { Component } from '@angular/core';
import { AccountService } from './_services/account.service';
import { Account, Role } from './_models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'thermos';
  account: Account | undefined;

constructor(private accountService: AccountService) {
  this.accountService.account.subscribe((x: Account | undefined) => this.account = x);
}

logout() {
  this.accountService.logout();
}

}
