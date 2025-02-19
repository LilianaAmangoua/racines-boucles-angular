import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ArticleType} from '../../models/articleType';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private articleUrl = "../../assets/jsonData/articles.json";
  constructor(private http: HttpClient) { }

  getArticles (): Observable<ArticleType[]> {
    return this.http.get<ArticleType[]>(this.articleUrl);
  }
}
