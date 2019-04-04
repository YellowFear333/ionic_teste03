import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },  { path: 'add', loadChildren: './cliente/add/add.module#AddPageModule' },
  { path: 'list', loadChildren: './cliente/list/list.module#ListPageModule' },
  { path: 'edit', loadChildren: './cliente/edit/edit.module#EditPageModule' }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
