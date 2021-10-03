import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import {TodosRoutingModule} from "./todos-routing.module";
import {StoreModule} from "@ngrx/store";
import {reducers} from "./state";
import {EffectsModule} from "@ngrx/effects";
import {TodoEffects} from "./state/effects";
import {OrderListModule} from "primeng/orderlist";
import {CheckboxModule} from "primeng/checkbox";
import {FormsModule} from "@angular/forms";
import {CardModule} from "primeng/card";
import {DividerModule} from "primeng/divider";
import {CustomModule} from "../../shared/custom.module";


@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    StoreModule.forFeature('featuresTodos', reducers),
    EffectsModule.forFeature([TodoEffects]),
    OrderListModule,
    CheckboxModule,
    FormsModule,
    CardModule,
    DividerModule,
    CustomModule,
  ]
})
export class TodosModule { }
