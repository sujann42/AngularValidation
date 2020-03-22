import {
    NgForm,
    FormGroup,
    FormControl,
    Validators,
    FormBuilder
} from '@angular/forms';
// Create :- We create the validation object model
// Connect :- We connect the validation to the UI
// Check :- IsValid , IsDirty
export class Customer {
    CustomerCode: string = '';
    CustomerName: string = '';
    CustomerAmount: number = 0;
    //(1)
    formCustomerGroup: FormGroup = null; //Create object of Form Group

    /*1) Declare a form group
    2) Inside the constructor, Create an object of FormBuilder
    3) Group the formGroup with the help of builder
    4) Add Controls
    */
    constructor() {
        //This is for testing validity.
        this.formCustomerGroup.valid;
        //(2)
        var _builder = new FormBuilder();
        //(3)
        this.formCustomerGroup = _builder.group({}); //Use builder to create

        //(4)
        //Control --> Validation
        // 1 control --> 1 validation
        this.formCustomerGroup.addControl('CustomerNameControl',
            new FormControl('', Validators.required));

        //Customer code control
        //Required: 4 letters numeric
        var validationCollection = [];
        validationCollection.push(Validators.required);
        validationCollection.push(Validators.pattern('^[0-9]{4,4}$')); // o to 9, max 4, min 4

        this.formCustomerGroup.addControl('CustomerCodeControl',
            new FormControl(Validators.compose(validationCollection)));

    }

}
