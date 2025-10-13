import { Routes } from '@angular/router';
import { ButtonEditorComponent } from './components/edita-cont/button-editor/button-editor.component';
import { CapaComponent } from './components/edita-cont/capa/capa.component';
import { EmpresasComponent } from './components/edita-cont/empresas/empresas.component';
import { HomeComponent } from './components/edita-cont/home/home.component';
import { LoginComponent } from './components/edita-cont/login/login.component';
import { PesquisaComponent } from './components/edita-cont/pesquisa/pesquisa.component';
import { PopupToggleComponent } from './components/edita-cont/popup-toggle/popup-toggle.component';
import { RegisterComponent } from './components/edita-cont/register/register.component';
import { UserListComponent } from './components/edita-cont/user-list/user-list.component';
import { AuthGuard } from './model/services/auth.guard';
import { IndexInicioComponent } from './components/page/index-inicio/index-inicio.component';
import { InicioBlogComponent } from './components/blog/inicio-blog/inicio-blog.component';
import { PostFormComponent } from './components/blog/post-form/post-form.component';
import { ArticleDetailComponent } from './components/blog/editorPosts/article-detail/article-detail.component';
import { EditaCursoComponent } from './components/edita-cont/edita-curso/edita-curso.component';

export const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  {path: 'inicio', component: IndexInicioComponent},
  { path: 'login', component: LoginComponent },
  { path: 'blog', component: InicioBlogComponent },
  { path: 'pesquisa', component: PesquisaComponent },
  { path: 'artigos/:id', component: ArticleDetailComponent },
  { path: 'user-list', component: UserListComponent },
  {
    path: 'admin',
    component: PesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['admin'] }, 
    children: [
      { path: '', component: HomeComponent },
      { path: 'capa', component: CapaComponent, data: { roles: ['admin'] } },
      { path: 'user', component: UserListComponent, data: { roles: ['admin'] } },
      { path: 'registerUser', component: RegisterComponent, data: { roles: ['admin'] } },
      { path: 'popup', component: PopupToggleComponent, data: { roles: ['admin'] } },
      { path: 'empresa', component: EmpresasComponent, data: { roles: ['admin'] } },
      { path: 'editorBtn', component: ButtonEditorComponent, data: { roles: ['admin'] } },
      { path: 'insta', component: PostFormComponent, data: { roles: ['admin'] } },
      { path: 'editaCurso', component: EditaCursoComponent, data: { roles: ['admin'] } },
    ],
  },

  {
    path: 'collaborator',
    component: PesquisaComponent,
    canActivate: [AuthGuard],
    data: { roles: ['user'] }, 
    children: [
      { path: '', component: HomeComponent },
      { path: 'capa', component: CapaComponent, data: { roles: ['user'] } },
    ],
  },

  { path: '**', redirectTo: 'login' },
];
