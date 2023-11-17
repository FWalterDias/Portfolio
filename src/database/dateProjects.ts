import formulario from "../assets/Projetos/formulario.png";
import formmularioPrev1 from "../assets/Projetos/formulario-prev-1.png";

import galaxias from "../assets/Projetos/galaxias.png";
import galaxiasPrev1 from "../assets/Projetos/galaxias-prev-1.png";
import galaxiasPrev2 from "../assets/Projetos/galaxias-prev-2.png";

import explore from "../assets/Projetos/explore.png";
import explorePrev1 from "../assets/Projetos/explore-prev-1.png";
import explorePrev2 from "../assets/Projetos/explore-prev-2.png";

import financiamento from "../assets/Projetos/financiamento.png";
import financiamentoPrev1 from "../assets/Projetos/financiamento-prev-1.png";
import financiamentoPrev2 from "../assets/Projetos/financiamento-prev-2.png";

import agenda from "../assets/Projetos/agenda.png";
import agendaPrev1 from "../assets/Projetos/agenda-prev-1.png";
import agendaPrev2 from "../assets/Projetos/agenda-prev-2.png";


import cubosFlix from "../assets/Projetos/cubosFlix.png";
import cubosFlixPrev1 from "../assets/Projetos/cubosFlix-prev-1.png";
import cubosFlixPrev2 from "../assets/Projetos/cubosFlix-prev-2.png";


import dindin from "../assets/Projetos/dindin.png";
import dindinPrev1 from "../assets/Projetos/dindin-prev-1.png";
import dindinPrev2 from "../assets/Projetos/dindin-prev-2.png";

import { ProjectsProps } from "../types/types";

export const projects:ProjectsProps[] = [
    {
        id: 1,
        tittle: "Formulario",
        description: "Prática de criação de formulário a partir de um layout no figma utilizando as tenologias vanilas do front-end",
        detail: "Esse Projeto foi desenvolvido a partir de um Figma, para praticar a contrução do Layout de formulários. Ele foi desenvolvido durante uma fomração na RocketSeat que visava formar desenvolvedores do Zero a Júniors.",
        cover: formulario,
        previws: [formmularioPrev1],
        tecnologies: ["HTML", "CSS"],
        areas: ["Desenvolvimento Web", "Web Design"],
        link: "https://fwalterdias.github.io/Formulario-Rocketseat/"
    },
    {
        id: 2,
        tittle: "Galaxias",
        description: "Prática de criação Landing-Page a partir de um layout no figma utilizando as tenologias vanilas do front-end a partir do conceito Mobile First",
        detail: "Esse Projeto foi desenvolvido a partir de um Figma, para praticar a contrução do Layouts Responsivos. Ele foi desenvolvido durante uma fomração na RocketSeat que visava formar desenvolvedores do Zero a Júniors.",
        cover: galaxias,
        previws: [galaxiasPrev1, galaxiasPrev2],
        tecnologies: ["HTML", "CSS"],
        areas: ["Desenvolvimento Web", "Web Design", "Layouts Responsivos"],
        link: "https://fwalterdias.github.io/Landing-Page-Galaxies/"
    },
    {
        id: 3,
        tittle: "Explore",
        description: "Prática de criação Landing-Page a partir de um layout no figma utilizando as tenologias vanilas do front-end a partir do conceito Mobile First",
        detail: "Esse Projeto foi desenvolvido a partir de um Figma, para praticar a contrução do Layouts Responsivos. Ele foi desenvolvido durante uma fomração na RocketSeat que visava formar desenvolvedores do Zero a Júniors.",
        cover: explore,
        previws: [explorePrev1, explorePrev2],
        tecnologies: ["HTML", "CSS"],
        areas: ["Desenvolvimento Web", "Web Design", "Layouts Responsivos"],
        link: "https://fwalterdias.github.io/LandingPage-ExploreSemLimites/"
    },
    {
        id: 4,
        tittle: "Sistema de Financiamento",
        description: "Este projeto foi criado para praticar os conceitos de POO em JavaScript. Se trata de um pequeno gerador de parcelas baseado em uma regra de negocio de financiamento com juros.",
        detail: "Esse Projeto foi desenvolvido a partir de uma atividade para praticar os conceitos de POO em JavaScript. Ela consiste em um pequeno formulário onde o usuário irá digitar o valor que deseja pegar emprestado, a quantidade de meses que deseja pagar, a taxa de juros e se deseja um período de carencia. Após isso será gerada uma tabela com as parcelas do emprestimo. Nesse Projeto apenas utlizei HTML simples e JavasScript. Penso em futuramente aprimorar esse projeto e desenvolve-lo utilizando JAVA.",
        cover: financiamento,
        previws: [financiamentoPrev1, financiamentoPrev2],
        tecnologies: ["HTML", "CSS", "JavaScript", "POO"],
        areas: ["Desenvolvimento Web"],
        link: "https://fwalterdias.github.io/Sistema-De-Financiamento/"
    },
    {
        id: 5,
        tittle: "Agenda",
        description: "Este projeto foi criado utilizando as tecnologias vanilas do front-end. Se trata de um modelo de agenda, estático.",
        detail: "Esse Projeto foi desenvolvido a partir de um Figma durante uma formação Full-Stack na Cubos Academy. Ele consiste em uma tela inicial de login onde antes o usuário deverá se cadastrar na API, e após isso será redirecionado para a pagina de contatos. por se tratar apenas de um modelo, ela está toda estática, porém, em breve estarei atualizando-a para deixá-la dinâminca e construirei um Back-End próprio.",
        cover: agenda,
        previws: [agendaPrev1, agendaPrev2],
        tecnologies: ["HTML", "CSS", "JavaScript", "API REST"],
        areas: ["Desenvolvimento Web", "Web Design"],
        link: "https://fwalterdias.github.io/Modelo-Tela-de-login/index.html"
    },
    {
        id: 6,
        tittle: "CubosFlix",
        description: "Este projeto foi criado utulizando as tecnologias vanilas do Front-End. Se trata de uma pagina onde o usuario pode pesquisar sobre filmes e obter informações sobre ele",
        cover: cubosFlix,
        detail: "Esse Projeto foi desenvolvido a partir de um Figma durante uma formação Full-Stack na Cubos Academy. Nesse projeto, meu trabalho foi consumir uma API, e a partir dos dados retornados dela, consumir seus dados no corpo do HTML já criado utilizando a biblioteca Axios. Ela ainda não está responsiva, mas em breve estarei atualizando esse propjeto e o tornado seu layout mais moderno.",
        previws: [cubosFlixPrev1, cubosFlixPrev2],
        tecnologies: ["HTML", "CSS", "JavaScript", "API REST"],
        areas: ["Desenvolvimento Web", "Web Design"],
        link: "https://fwalterdias.github.io/Cubos-Flix/"
    },
    {
        id: 7,
        tittle: "Din Din",
        description: "Este projeto foi criado utilizando React.JS. Ele se trata de um modelo de controle de finanças pessoais, onde o usuario pode cadastrar, editar e exluir transações.",
        detail: "Esse Projeto foi desenvolvido a partir de um Figma durante uma formação Full-Stack na Cubos Academy. Nesse projeto, meu trabalho foi contruir o Front-End dessa aplicação utilizando React.Js. Para realizar esse projeto, precisei utilizar uma biblioteca do React chamada React-Router-Dom, para criar as páginas da aplicação, criando rotas protegidas e aninhadas. Além disso, para salvar os dados do usuário consumi uma API com a bliblioteca Axios. No momento ele ainda não está responsivo, mas em breve estarei deixando seu layout mais moderno.",
        cover: dindin,
        previws: [dindinPrev1, dindinPrev2],
        tecnologies: ["HTML", "CSS", "JavaScript", "API REST", "React.js", "Node.js", "Axios"],
        areas: ["Desenvolvimento Web", "Web Design"],
        link: "https://sistema-financeiro-blond.vercel.app/"
    }
]