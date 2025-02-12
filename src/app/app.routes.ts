import { Routes } from '@angular/router';
import { FormComponent } from './component/form/form.component';
import { EventsComponent } from './component/events/events.component';
import { UsersComponent } from './component/users/users.component';

export const routes: Routes = [
    { path: "", component: UsersComponent },
    { path: "form", component: FormComponent },
    { path: "events", component: EventsComponent },
];
