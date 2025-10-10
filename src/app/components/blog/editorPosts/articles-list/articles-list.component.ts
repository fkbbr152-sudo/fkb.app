import { Component } from '@angular/core';
import { ArticleService } from '../../../../model/services/article.service';
import { Iarticle } from '../../../../model/types/iarticle';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [CommonModule,RouterLink,HttpClientModule],
  providers:[ArticleService],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.scss'
})
export class ArticlesListComponent {
articles: Iarticle[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getArticles().subscribe(data => {
      console.log(data);
      this.articles = data;
    });
  }
scrollToLeft() {
  const scrollContainer = document.querySelector('.scroll-container');
  scrollContainer?.scrollBy({ left: -300, behavior: 'smooth' });  // Ajuste o valor de -300 conforme necessário
}

scrollToRight() {
  const scrollContainer = document.querySelector('.scroll-container');
  scrollContainer?.scrollBy({ left: 300, behavior: 'smooth' });  // Ajuste o valor de 300 conforme necessário
}




}
