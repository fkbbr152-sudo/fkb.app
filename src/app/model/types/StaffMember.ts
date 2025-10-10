export interface StaffMember {
  id: number;
  nome: string;
  cargo: string;
  departamento: string;
  setor?: string;
  email?: string;
  telefone?: string;
  ramal?: string;
  celular?: string;
  lattes_url?: string;
  image_url: string;
}