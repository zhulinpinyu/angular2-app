import {Component,OnInit} from 'angular2/core'
import {ControlGroup, FormBuilder, Validators} from 'angular2/common'

@Component({
    selector: 'data-driven-form',
    template:`
        <h2>Sign up Form</h2>
        <form [ngFormModel]="myForm" (ngSubmit)="onSubmit()">
            <div>
                <label for="email">Email</label>
                <input [ngFormControl]="myForm.controls['email']" type="text" id="email" required #email="ngForm"/>
                <span class="validation-error" *ngIf="!email.valid">Not Valid</span>
            </div>
            <div>
                <label for="password">Password</label>
                <input [ngFormControl]="myForm.controls['password']" type="password" id="password" required #password="ngForm"/>
                <span class="validation-error" *ngIf="!password.valid">Not Valid</span>
            </div>
            <div>
                <label for="confirm-password">Confirm Password</label>
                <input [ngFormControl]="myForm.controls['confirmPassword']" type="password" id="confirm-password" required #confirmPassword="ngForm"/>
                <span class="validation-error" *ngIf="!confirmPassword.valid">Not Valid</span>
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
        this.user = this.myForm.value
        console.log(this.myForm)
    }
}
