import { Routes } from '@angular/router';
import {HomeComponent} from './modules/home/components/home.component';
import {AboutComponent} from './modules/about/components/about.component';
import {ListComponent} from './modules/article/components/list/list.component';
import {ArticleDetailsComponent} from './modules/article/components/article-details/article-details.component';
import {ContactComponent} from './modules/contact/contact.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'articleList', component: ListComponent},
  {path: 'article/:id', component: ArticleDetailsComponent},
  {path: "contact", component: ContactComponent}
];
