import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { MenuDetailsComponent } from './components/menu-details/menu-details.component';
import { AddMenuComponent } from './components/add-menu/add-menu.component';

const routes: Routes = [{ path: '', redirectTo: 'menus', pathMatch: 'full' },
{ path: 'menus', component: MenuListComponent },
{ path: 'menus/:menuid', component: MenuDetailsComponent },
{ path: 'add', component: AddMenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


