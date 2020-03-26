import { Component } from '@angular/core';
import {BaseLogger} from '../Utility/CustomerApp.Logger';
@Component({
  templateUrl: './CustomerApp.SupplierView.html'
})
export  class SupplierComponent {
  LogObj: BaseLogger=null;

  constructor(_logger: BaseLogger) {
    this.LogObj.Log();
  }
}

