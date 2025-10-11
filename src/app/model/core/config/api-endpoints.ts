import { environment } from "../../environments/environments";

export const API_ENDPOINTS = {
  base: environment.apiBaseUrl,
  uploadDir: `${environment.apiBaseUrl}/assets/`,
  listUser: `${environment.apiBaseUrl}/list_users.php`,
  articles: `${environment.apiBaseUrl}/articles.php`,
  insta: `${environment.apiBaseUrl}/insta.php`,
  buttons: `${environment.apiBaseUrl}/buttons.php`,
  empresasConveniadas: `${environment.apiBaseUrl}/empresasConveniadas.php`,
  image: `${environment.apiBaseUrl}/image.php`,
  popup: `${environment.popupBaseUrl}/popup.php`,
  contatos: `${environment.apiBaseUrl}/get_contatos.php`,
  cursos:`${environment.apiBaseUrl}/course.php`,
  logout: `${environment.apiBaseUrl}/logout.php`
};
