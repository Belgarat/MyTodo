import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {State} from "./core/state";
import {Store} from "@ngrx/store";
import * as AppState from './core/state';
import * as userActions from './core/state/actions';

@Component({
  selector: 'mbr-root',
  template: `
    <p-menubar [model]="items">
      <ng-template pTemplate="start">
        <img alt="Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/768px-Google_%22G%22_Logo.svg.png" height="40" class="p-mr-2">
      </ng-template>
    </p-menubar>
    <h1 *ngIf="username">Welcome <strong>{{username}}</strong></h1>
    {{(isLogged$|async)}}
    <button (click)="forceLogin()">Switch login</button>
    <router-outlet></router-outlet>
  `,
  styles: [`
  `]
})
export class AppComponent implements OnInit {
  title = 'MyTodo';
  username = '';
  items: MenuItem[] | [] = [];
  isLogged$ = this.store.select(AppState.selectUserLogged);

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
    this.isLogged$.subscribe(logged => logged ? this.username = 'Marco' : this.username = '');
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
      }
    ];
  }

  forceLogin() {
    this.store.dispatch(userActions.forceLogin());
  }
}
