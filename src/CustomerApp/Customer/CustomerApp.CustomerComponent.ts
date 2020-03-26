import {Component} from '@angular/core';
import {Customer} from './CustomerApp.model';
import {BaseLogger, ILogger} from '../Utility/CustomerApp.Logger';

@Component({
    templateUrl: './CustomerApp.CustomerView.html'
})
export class CustomerComponent {
    title = 'CustomerApplication';
    CustomerModel: Customer = new Customer();
    CustomerModels: Array<Customer> = new Array<Customer>();
    LogObj: BaseLogger = null;

    constructor(_logger: BaseLogger) {
        this.LogObj.Log();
    }

    Add() {
        this.CustomerModels.push(this.CustomerModel);
        this.CustomerModel = new Customer();// clear UI
    }

    hasError(typeofvalidator: string,
             controlname: string): boolean {
        return this.CustomerModel
            .formCustomerGroup
            .controls[controlname]
            .hasError(typeofvalidator);
    }
}

