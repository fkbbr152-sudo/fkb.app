import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../../model/services/article.service';
import { Iarticle } from '../../../../model/types/iarticle';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-article-admin',
  standalone: true,
  imports: [CommonModule, FormsModule,HttpClientModule],
  providers:[ArticleService],
  templateUrl: './article-admin.component.html',
  styleUrl: './article-admin.component.scss'
})
export class ArticleAdminComponent implements OnInit {
  articles: Iarticle[] = [];
  selectedArticle: Iarticle | null = null;

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.carregarArtigos();
  }

  carregarArtigos() {
    this.articleService.getArticles().subscribe(data => {
      this.articles = data;
    });
  }

  novo() {
    this.selectedArticle = {
      id: 0,
      title: '',
      summary: '',
      content: '',
      image_url: '',
      createdAt: new Date()
    };
  }

  editar(article: Iarticle) {
    this.selectedArticle = { ...article };
  }

  excluir(id: number) {
    if (confirm('Tem certeza que deseja excluir?')) {
      this.articleService.deleteArticle(id).subscribe(() => {
        this.carregarArtigos();
      });
    }
  }

  salvar() {
    if (this.selectedArticle) {
      if (this.selectedArticle.id === 0) {
        this.articleService.addArticle(this.selectedArticle).subscribe(() => {
          this.carregarArtigos();
          this.selectedArticle = null;
        });
      } else {
        this.articleService.updateArticle(this.selectedArticle).subscribe(() => {
          this.carregarArtigos();
          this.selectedArticle = null;
        });
      }
    }
  }

  cancelar() {
    this.selectedArticle = null;
  }

}
