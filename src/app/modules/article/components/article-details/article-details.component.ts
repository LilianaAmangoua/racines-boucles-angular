import {Component, Input, OnInit} from '@angular/core';
import {ArticleType} from '../../../../models/articleType';
import {ArticleService} from '../../article.service';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-article-details',
  imports: [],
  templateUrl: './article-details.component.html',
  styleUrl: './article-details.component.css'
})
export class ArticleDetailsComponent implements OnInit{
  @Input() articles: ArticleType[] = [];
  constructor(private articleService: ArticleService) {

  }
  ngOnInit(): void {
    this.articleService.getArticles().subscribe(
      data => this.articles = data,
      error => console.log(error)
    )
  }

}
