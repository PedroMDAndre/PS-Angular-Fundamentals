import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Component({
    templateUrl: "./login.component.html",
    styles: [`
    em { float: right; color: #E05C65; padding-left: 10px }
    `]
})
export class LoginComponent {
    userName: string = "";
    password: string = "";
    mouseoverLogin: boolean = false;
    loginInvalid: boolean = false;

    constructor(private authService: AuthService,
        private route: Router) { }

    login(formValues: any) {
        this.authService.loginUser(formValues.userName, formValues.password)
            .subscribe(resp => {
                if (!resp) {
                    this.loginInvalid = true;
                } else {
                    this.route.navigate(["events"]);
                }
            });

    }

    cancel() {
        this.route.navigate(["events"]);
    }
}