export interface Diploma {
  diploma_id: number; // ID do diploma vindo do banco
  curso: string; // Nome do curso (já vem da tabela 'cursos')
  iesExpedidora: string | null;
  iesRegistradora: string | null;
  dataIngresso: string | null;
  dataConclusao: string | null;
  dataExpedicaoDiploma: string | null;
  dataRegistroDiploma: string | null;
  numeroExpedicao: string | null;
  numeroRegistro: string | null;
  dataPublicacaoDOU: string | null;
  retirouDiploma: string | null; // Pode ser 'SIM', 'NAO', 'N' etc.
  numeroDiploma: string | null;
  linkPublicacao: string | null;
}

// Interface para a estrutura da resposta completa da API
export interface ApiResponse {
  student: {
    name: string;
    cpf: string; // CPF formatado
  } | null; // O estudante pode não ser encontrado
  diplomas: Diploma[];
}