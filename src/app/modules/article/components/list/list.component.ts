import { Component } from '@angular/core';
import {ArticleCardComponent} from '../article-card/article-card.component';
import {ArticleType} from '../../../../models/articleType';
import {ArticleService} from '../../article.service';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [
    ArticleCardComponent, NgFor
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  articles: ArticleType[] = [];
  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articleService.getArticles().subscribe((articles: ArticleType[]) => {
      this.articles = articles;
    })
  }
}
