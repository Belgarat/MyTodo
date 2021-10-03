import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebugInfoComponent } from './debug-info/debug-info.component';
import {DividerModule} from "primeng/divider";
import {IsProductionDirective} from "./directive/is-production.directive";



@NgModule({
  declarations: [
    DebugInfoComponent,
    IsProductionDirective
  ],
  exports: [
    DebugInfoComponent,
    IsProductionDirective
  ],
  imports: [
    CommonModule,
    DividerModule
  ]
})
export class CustomModule { }
