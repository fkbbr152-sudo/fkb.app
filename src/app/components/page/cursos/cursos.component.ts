import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import Swal from 'sweetalert2';

import { Course } from '../../../model/types/course.interface';
import { CourseService } from '../../../model/services/course.service';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule],
  providers: [CourseService],
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  public graduacao$!: Observable<Course[]>;
  public pos$!: Observable<Course[]>;
  public tecnico$!: Observable<Course[]>;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    const courses$ = this.courseService.getCourses();
    this.graduacao$ = courses$.pipe(
      map(courses => courses.filter(c => c.categoria === 'graduacao'))
    );
    this.pos$ = courses$.pipe(
      map(courses => courses.filter(c => c.categoria === 'pos'))
    );
    this.tecnico$ = courses$.pipe(
      map(courses => courses.filter(c => c.categoria === 'tecnico'))
    );  
  }

  /**
   * Ação 1: Abre o link de inscrição em uma nova aba.
   */
  inscrever(course: Course, event: Event): void {
    event.preventDefault();
    window.open(course.inscricaoUrl, '_blank');
  }

  /**
   * Ação 3: Mostra o modal de detalhes do curso.
   */
  showCourseDetails(card: Course): void {
    const linksHtml = card.links.map(link =>
      `<a href="${link.url}" target="_blank" 
          class="btn btn-block p-2 text-white mb-2 swal-link-button" 
          style="background-color: #08558B;"
          onmouseover="this.style.backgroundColor='#06385c'"
          onmouseout="this.style.backgroundColor='#08558B'">
        ${link.text}
      </a>`
    ).join('');

    Swal.fire({
      title: `<h2 class="swal-title">${card.title}</h2>`,
      html: `
        <div class="text-center">
          <img src="${card.logo}" alt="Logo do Curso" class="w-50 m-4">
          <div class="d-grid gap-2 swal-links-container">
            ${linksHtml}
          </div>
          <div class="swal-actions-container m-4">
            <a href="${card.inscricaoUrl}" target="_blank" class="btn btn-lg me-2 btn-success">Inscreva-se</a>
            <button id="closeSwal" class="btn btn-danger btn-lg swal-sair-button">Sair</button>
          </div>
        </div>
      `,
      showConfirmButton: false,
      background: '#f8f9fa',
      width: '500px',
      customClass: {
        popup: 'course-swal-popup'
      },
      didOpen: () => {
        document.getElementById('closeSwal')?.addEventListener('click', () => {
          Swal.close();
        });
      }
    });
  }
}