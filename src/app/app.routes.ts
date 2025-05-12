import { Routes } from '@angular/router';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';

export const routes: Routes = [
    {path:'' , redirectTo:'timeline' , pathMatch:'full'},
    {path:'timeline' , component:TimelineComponent , title:'timeline'},
    {path:'login' , component:TimelineComponent , title:'login'},
    {path:'signin' , component:TimelineComponent , title:'signin'},
    {path:'**' , component:NotfoundComponent , title:'notfound'},
];
