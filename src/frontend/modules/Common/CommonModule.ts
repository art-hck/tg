import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MaterialModule} from "../Application/MaterialModule";
import {CommonModule as AngularCommonModule} from "@angular/common";

@NgModule({
    imports: [
        AngularCommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
    ],
    declarations: [
    ],
    exports: [
        AngularCommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
    ]
})
export class CommonModule {
}