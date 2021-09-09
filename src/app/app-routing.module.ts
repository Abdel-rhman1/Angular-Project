import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MovicesComponent } from './movices/movices.component';
import { NetworkComponent } from './network/network.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { TvComponent } from './tv/tv.component';

const routes: Routes = [
{path : '' , redirectTo:'home' , pathMatch:'full'},
{path:'home' , component:HomeComponent},
{path : 'about' , component:AboutComponent},
{path : 'tv' , component:TvComponent},
{path : 'network' , component:NetworkComponent},
{path: 'movice' , component:MovicesComponent},
{path: '**' , component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
