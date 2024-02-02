import { Routes } from '@angular/router';
import { AlltaskComponent } from './Mywebcomponent/pages/alltask/alltask.component';
import { ImportantComponent } from './Mywebcomponent/pages/important/important.component';
import { CompletedComponent } from './Mywebcomponent/pages/completed/completed.component';

export const routes: Routes = [
    {
        path: '',
        component: AlltaskComponent,
      },
      {
        path: 'important',
        component: ImportantComponent,
      },
      {
        path: 'completed',
        component: CompletedComponent,
      },
];
