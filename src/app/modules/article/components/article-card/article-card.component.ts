import {Component, Input} from '@angular/core';
import {ArticleType} from '../../../../models/articleType';

@Component({
  selector: 'article-card',
  imports: [],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.css'
})
export class ArticleCardComponent {
  @Input() article!: ArticleType;

}
