import {Component,OnInit} from 'angular2/core'
import {ControlGroup, FormBuilder, Validators} from 'angular2/common'

@Component({
    selector: 'data-driven-form',
    template:`
        <h2>Sign up Form</h2>
        <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
            <div>
                <label for="email">Email</label>
                <input [ngFormControl]="myForm.controls['email']" type="text" id="email" required/>
                <span class="validation-error">Not Valid</span>
            </div>
            <div>
                <label for="password">Password</label>
                <input [ngFormControl]="myForm.controls['password']" type="password" id="password" required/>
                <span class="validation-error">Not Valid</span>
            </div>
            <div>
                <label for="confirm-password">Confirm Password</label>
                <input [ngFormControl]="myForm.controls['confirmPassword']" type="password" id="confirm-password" required/>
                <span class="validation-error">Not Valid</span>
            </div>
            <button type="submit">Submit</button>
        </form>
        <div>
            Email: {{user.email}} <br />
            Password: {{user.password}}
        </div>
    `,
})
export class DataDrivenFormComponent implements OnInit{
    myForm: ControlGroup
    user = {email: '',password: ''}

    constructor(private _formBuilder:FormBuilder){}

    ngOnInit(){
        this.myForm = this._formBuilder.group({
            email: ['',Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        });
    }

    onSubmit(){
        console.log(this.myForm);
    }
}
