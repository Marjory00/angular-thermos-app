import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Alert, AlertType } from '../_models';


@Injectable({ providedIn: 'root' })
export class AlertService {
    private subject = new Subject<Alert>();
    private defaultId = 'default-alert';

    // 
}