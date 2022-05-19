import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthComponent } from "./auth.component";
import { AuthRoutingModule } from "./auth.routing-module";

@NgModule({
    declarations: [
        AuthComponent
    ],
    imports: [
        ReactiveFormsModule,
        AuthRoutingModule,
        FormsModule,
        CommonModule,
    ],
    exports: []
})
export class AuthModule {}