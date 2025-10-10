import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../../../../model/services/article.service';
import { Iarticle } from '../../../../model/types/iarticle';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ArticlesListComponent } from '../articles-list/articles-list.component';

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [CommonModule, HttpClientModule, ArticlesListComponent],
  providers:[ArticleService],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.scss'
})
export class ArticleDetailComponent implements OnInit {
  article: Iarticle | undefined;

  constructor(private route: ActivatedRoute, private articleService: ArticleService) {}

 ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  console.log('ID carregado:', id);   // <-- ADICIONA ISSO

  this.articleService.getArticleById(id).subscribe(data => {
    console.log('Dados do artigo:', data);   // <-- E ISSO
    this.article = data;
  });
}


}
