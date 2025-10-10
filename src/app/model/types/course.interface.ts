export interface CourseLink {
  text: string;
  url: string;
}

export interface Course {
  image: string;
  title: string;
  type: string;
  logo: string;
  links: CourseLink[];
  inscricaoUrl: string;
  bolsasUrl: string;
  categoria: 'graduacao' | 'pos' | 'tecnico'; // Adicionado
}