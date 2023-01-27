import { Component } from '@angular/core';
import { AccountService } from './_services';
import { Account, Role } from './_models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'thermos';
  account: Account;


}
