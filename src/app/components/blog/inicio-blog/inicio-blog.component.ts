import { Component } from '@angular/core';
import { NavbarComponent } from "../../page/navbar/navbar.component";
import { BannerComponent } from "../banner/banner.component";
import { PostListComponent } from '../post-list/post-list.component';
import { AboutComponent } from "../about/about.component";
import { SessaoContatosComponent } from "../../page/sessao-contatos/sessao-contatos.component";
import { ArticlesListComponent } from '../editorPosts/articles-list/articles-list.component';

@Component({
  selector: 'app-inicio-blog',
  standalone: true,
  imports: [
      NavbarComponent, 
      BannerComponent, 
      PostListComponent, 
      AboutComponent, 
      SessaoContatosComponent,
      ArticlesListComponent
    ],
  templateUrl: './inicio-blog.component.html',
  styleUrl: './inicio-blog.component.scss'
})
export class InicioBlogComponent {

}
