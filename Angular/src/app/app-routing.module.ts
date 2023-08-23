import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:() => import ('./modules/home/home.module').then((m) => m.HomeModule)
  },
  {
    path:'admin',
    loadChildren:() => import ('./modules/admin/admin.module').then((m) => m.AdminModule)
  },
  {
    path:'provider',
    loadChildren:() => import ('./modules/foods-providers/foods-providers.module').then((m) => m.FoodsProvidersModule)
  },
  {
    path:'rider',
    loadChildren:() => import ('./modules/riders/riders.module').then((m) => m.RidersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
