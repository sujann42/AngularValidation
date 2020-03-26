import {Component} from '@angular/core';
import {BaseLogger} from '../Utility/CustomerApp.Logger';

@Component({
    templateUrl: './CustomerApp.HomeView.html'
})
export class HomeComponent {
    LogObj: BaseLogger = null;

    constructor(_logger: BaseLogger) {
        this.LogObj = _logger;
        this.LogObj.Log();
    }
}

