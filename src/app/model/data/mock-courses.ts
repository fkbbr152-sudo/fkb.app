import { Course } from "../types/course.interface";

export const COURSES: Course[] = [
{
        image: 'adm.png',
        title: 'Administração',
        type: 'Bacharelado',
        logo: 'logoadm.png',
        links: [
            { text: '✓ BOLSA DE ESTUDOS', url: 'https://querobolsa.com.br/fii-faculdades-integradas-de-itapetininga/cursos/administracao/17ffdb8c-76c7-46ee-a3b5-e6596eda4b38' },
            { text: '✓ DESCONTOS ESPECIAIS PARA PARCEIROS', url: 'arquivos/cursos/parceiros.pdf' },
            { text: '✓ INFORMAÇÃO SOBRE O CURSO', url: 'arquivos/cursos/adm_info.pdf' },
            { text: '✓ MATRIZ CURRICULAR', url: 'arquivos/matriz_curricular/Matriz Nova Grade 2023 ADM.pdf' },
            { text: '✓ PROFESSORES', url: 'arquivos/professores/professor_adm.pdf' }
        ],
        inscricaoUrl: 'https://portais.qualinfonet.com.br/fkb/acadweb.modulo.eventos.php',
        bolsasUrl: '#',
        categoria: 'graduacao'
    },
    {
        image: 'dir.png',
        title: 'Direito',
        type: 'Bacharelado',
        logo: 'logodir.png',
        links: [
            { text: '✓ BOLSA DE ESTUDOS', url: 'https://querobolsa.com.br/fii-faculdades-integradas-de-itapetininga/cursos/direito/fbe1d3fc-3392-4a80-859c-dae28b25e0f2' },
            { text: '✓ NÚCLEO DE PRÁTICA JURÍDICA', url: '#' }, // Link não fornecido no HTML
            { text: '✓ INFORMAÇÃO SOBRE O CURSO', url: 'arquivos/cursos/dir_info.pdf' },
            { text: '✓ MATRIZ CURRICULAR', url: 'arquivos/matriz_curricular/matriz_dir.pdf' },
            { text: '✓ CORPO DOCENTE', url: 'arquivos/professores/professor_dir.pdf' } // Mapeado de "PROFESSORES"
        ],
        inscricaoUrl: 'https://portais.qualinfonet.com.br/fkb/acadweb.modulo.eventos.php',
        bolsasUrl: '#',
        categoria: 'graduacao'
    },
    {
        image: 'edulin.png',
        title: 'Educação Física',
        type: 'Licenciatura',
        logo: 'logofislin.png',
        links: [
            { text: '✓ BOLSA DE ESTUDOS', url: 'https://querobolsa.com.br/fii-faculdades-integradas-de-itapetininga/cursos/educacao-fisica/80de73c5-d745-4da7-9a06-6317a2b0b846' },
            { text: '✓ LABORATÓRIOS E INFRAESTRUTURA', url: '#' }, // Link não fornecido no HTML
            { text: '✓ INFORMAÇÃO SOBRE O CURSO', url: 'arquivos/cursos/edfb_info.pdf' },
            { text: '✓ MATRIZ CURRICULAR', url: 'arquivos/matriz_curricular/matriz_edfb.pdf' },
            { text: '✓ PROFESSORES', url: 'arquivos/professores/professor_edfb.pdf' }
        ],
        inscricaoUrl: 'https://portais.qualinfonet.com.br/fkb/acadweb.modulo.eventos.php',
        bolsasUrl: '#',
        categoria: 'graduacao'
    },
    {
        image: 'edubac.png',
        title: 'Educação Física',
        type: 'Bacharelado',
        logo: 'logofisibach.png',
        links: [
            { text: '✓ BOLSA DE ESTUDOS', url: 'https://querobolsa.com.br/fii-faculdades-integradas-de-itapetininga/cursos/educacao-fisica/898ae381-c5a9-43a4-b197-161bd967cf77' },
            { text: '✓ ÁREAS DE ATUAÇÃO DO BACHAREL', url: '#' }, // Link não fornecido no HTML
            { text: '✓ INFORMAÇÃO SOBRE O CURSO', url: 'arquivos/cursos/edfl_info.pdf' },
            { text: '✓ MATRIZ CURRICULAR', url: 'arquivos/matriz_curricular/matriz_edfl.pdf' },
            { text: '✓ PROFESSORES', url: 'arquivos/professores/professor_edfl.pdf' }
        ],
        inscricaoUrl: 'https://portais.qualinfonet.com.br/fkb/acadweb.modulo.eventos.php',
        bolsasUrl: '#',
        categoria: 'graduacao'
    },

    // Pós-graduação - Educação Especial
    {
        image: 'pos-inclusiva.png',
        title: 'Educação Especial',
        type: 'Pós-graduação',
        logo: 'logopos.png',
        links: [
            { text: '✓ CALENDÁRIO LETIVO', url: 'arquivos/pos-graduacao/calendario letivo de educação especial.pdf' },
            { text: '✓ INFORMAÇÃO SOBRE O CURSO', url: 'arquivos/pos-graduacao/Informações do curso.pdf' },
            { text: '✓ MATRIZ CURRICULAR', url: 'arquivos/pos-graduacao/matriz curricular educação especial.pdf' },
            { text: '✓ PROFESSORES', url: 'arquivos/pos-graduacao/professores.pdf' }
        ],
        inscricaoUrl: 'https://portais.qualinfonet.com.br/fkb/acadweb.modulo.eventos.php',
        bolsasUrl: '#',
        categoria: 'pos'
    },

    // {
    //     image: 'pos-adm.png',
    //     title: 'Administração',
    //     type: 'Pós-graduação',
    //     logo: 'senai-logo.png',
    //     links: [
    //         { text: '✓ INFORMAÇÃO SOBRE O CURSO', url: '#' },
    //         { text: '✓ MATRIZ CURRICULAR', url: '#' }
    //     ],
    //     inscricaoUrl: 'https://portais.qualinfonet.com.br/fkb/acadweb.modulo.eventos.php',
    //     bolsasUrl: '#',
    //     categoria: 'pos'
    // },
    // Curso Técnico SENAI - Administração
    // {
    //     image: 'tecadm.png',
    //     title: 'Aux. Administrativo',
    //     type: 'Técnico',
    //     logo: 'senai-logo.png',
    //     links: [
    //         { text: '✓ INFORMAÇÃO SOBRE O CURSO', url: '#' },
    //         { text: '✓ MATRIZ CURRICULAR', url: '#' }
    //     ],
    //     inscricaoUrl: 'https://portais.qualinfonet.com.br/fkb/acadweb.modulo.eventos.php',
    //     bolsasUrl: '#',
    //     categoria: 'tecnico'
    // },
    // {
    //     image: 'rec-human.png',
    //     title: 'Recursos Humanos',
    //     type: 'Técnico',
    //     logo: 'senai-logo.png',
    //     links: [
    //         { text: '✓ INFORMAÇÃO SOBRE O CURSO', url: '#' },
    //         { text: '✓ MATRIZ CURRICULAR', url: '#' }
    //     ],
    //     inscricaoUrl: 'https://portais.qualinfonet.com.br/fkb/acadweb.modulo.eventos.php',
    //     bolsasUrl: '#',
    //     categoria: 'tecnico'
    // },
    // {
    //     image: 'Powerbi.png',
    //     title: 'Power BI',
    //     type: 'Técnico',
    //     logo: 'senai-logo.png',
    //     links: [
    //         { text: '✓ INFORMAÇÃO SOBRE O CURSO', url: '#' },
    //         { text: '✓ MATRIZ CURRICULAR', url: '#' }
    //     ],
    //     inscricaoUrl: 'https://portais.qualinfonet.com.br/fkb/acadweb.modulo.eventos.php',
    //     bolsasUrl: '#',
    //     categoria: 'tecnico'
    // },
    // {
    //     image: 'excel.png',
    //     title: 'Excel Avançado',
    //     type: 'Técnico',
    //     logo: 'senai-logo.png',
    //     links: [
    //         { text: '✓ INFORMAÇÃO SOBRE O CURSO', url: '#' },
    //         { text: '✓ MATRIZ CURRICULAR', url: '#' }
    //     ],
    //     inscricaoUrl: 'https://portais.qualinfonet.com.br/fkb/acadweb.modulo.eventos.php',
    //     bolsasUrl: '#',
    //     categoria: 'tecnico'
    // },
];