import {Component} from 'angular2/core'

@Component({
    selector: 'template-driven-form',
    template:`
        <h2>Sign up Form</h2>
        <form (ngSubmit)="onSubmit(f)" #f="ngForm">
            <div>
                <label for="email">Email</label>
                <input ngControl="email" type="text" id="email" required #email="ngForm"/>
                <span class="validation-error" *ngIf="!email.valid">Not Valid</span>
            </div>
            <div>
                <label for="password">Password</label>
                <input ngControl="password" type="text" id="password" required #password="ngForm"/>
                <span class="validation-error" *ngIf="!password.valid">Not Valid</span>
            </div>
            <div>
                <label for="confirm-password">Confirm Password</label>
                <input ngControl="confirm-password" type="password" id="confirm-password" required #confirmPassword="ngForm"/>
                <span class="validation-error" *ngIf="!confirmPassword.valid">Not Valid</span>
            </div>
            <button type="submit" [disabled]="!f.valid || password.value != confirmPassword.value">Submit</button>
        </form>
        <div>
            Email: {{user.email}} <br />
            Password: {{user.password}}
        </div>
    `,
})
export class TemplateDrivenFormComponent{
    user = {email: '',password: ''}

    onSubmit(form){
        this.user.email = form.value["email"];
        this.user.password = form.controls["password"].value;
        console.log(form);
    }
}
