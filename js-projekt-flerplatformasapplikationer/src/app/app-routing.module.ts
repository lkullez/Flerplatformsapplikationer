import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JokesComponent } from './jokes/jokes.component';
const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: 'jokes' },
{ path: 'jokes', component: JokesComponent },
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
