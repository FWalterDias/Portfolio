import todolist from "../assets/Projetos/To-Do-List.png";
import todolistPrev1 from "../assets/Projetos/To-Do-List-prev-1.png";
import todolistPrev2 from "../assets/Projetos/To-Do-List-prev-2.png";

import gitfav from "../assets/Projetos/git-fav.png";
import gitfavPrev1 from "../assets/Projetos/git-fav-prev-1.png";
import gitfavPrev2 from "../assets/Projetos/git-fav-prev-2.png";

import explorePrev1 from "../assets/Projetos/explore-prev-1.png";
import explorePrev2 from "../assets/Projetos/explore-prev-2.png";
import explore from "../assets/Projetos/explore.png";

import financiamentoPrev1 from "../assets/Projetos/financiamento-prev-1.png";
import financiamentoPrev2 from "../assets/Projetos/financiamento-prev-2.png";
import financiamento from "../assets/Projetos/financiamento.png";



import cubosFlixPrev1 from "../assets/Projetos/cubosFlix-prev-1.png";
import cubosFlixPrev2 from "../assets/Projetos/cubosFlix-prev-2.png";
import cubosFlix from "../assets/Projetos/cubosFlix.png";


import dindinPrev1 from "../assets/Projetos/dindin-prev-1.png";
import dindinPrev2 from "../assets/Projetos/dindin-prev-2.png";
import dindin from "../assets/Projetos/dindin.png";

import { ProjectsProps } from "../types/types";

export const projects:ProjectsProps[] = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
        tittle: "Git Fav",
        description: "Uma aplicação simples, resposiva, que permite pesquisar usuários do GitHub e exibir os resultados em uma tabela. A aplicação foi desenvolvida como parte do curso Explorer na Rocketseat.",
        detail: "Esse Projeto foi desenvolvido a partir de uma atividade para praticar os conceitos de POO em JavaScript durante a formação Explorer na RocketSeat. Ela consiste em um pequeno site onde o usuario poderá adicionar usuarios do github pesquisando seus nome no input. Caso o usuário nao exista, será retornado um alerta informando que o usuário nao foi encontrado. Caso ele exista, será adicionado na tabela. Após adicionado um usuario pesquisado, ao clicar no nome do usuario voce será direcionado para o github do usuario selecionado. Além disso voê poderá removê-lo da tabela clicando me 'Remover'.",
        cover: gitfav,
        previws: [gitfavPrev1, gitfavPrev2],
        tecnologies: ["HTML", "CSS", "JavaScript", "POO", "API"],
        areas: ["Desenvolvimento Web","Web Design", "Layouts Responsivos"],
        link: "https://fwalterdias.github.io/Git-Fav/"
    },
    {
        id: 4,
        tittle: "To Do List",
        description: " A aplicação consiste em uma lista de tarefas (To-Do List), responsiva, com funcionalidades de cadastro, login, adição, conclusão e remoção de tarefas.",
        cover: todolist,
        detail: "Para o desenvolvimento desse proejto, eu criei um figma baseado em um outro porjeto meu chamado Din-Din. Para utilizar a aplicação, o usuário poderá se cadastrar, ou fazer o login sem cadastro. No entanto, caso opte por entrar sem cadastro, não terá seus dados salvos. As funcionalidades da aplicação consistem em, Cadastrar um usuário, Logar na aplicação, Adicionar uma tarefa, Exclir uma tarfa, Marcar como concluída, e filtrar tarefa por status.",
        previws: [todolistPrev1, todolistPrev2],
        tecnologies: ["React.js", "Typecript", "Node.js", "Axios", "API REST", "Styled-Components" ],
        areas: ["Desenvolvimento Web", "Web Design"],
        link: "https://to-do-list-nu-gilt.vercel.app/"
    },
    {
        id: 5,
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
        id: 6,
        tittle: "Din Din",
        description: "Este projeto foi criado utilizando React.JS. Ele se trata de um modelo de controle de finanças pessoais, onde o usuario pode cadastrar, editar e exluir transações.",
        detail: "Esse Projeto foi desenvolvido a partir de um Figma durante uma formação Full-Stack na Cubos Academy. Nesse projeto, meu trabalho foi contruir o Front-End dessa aplicação utilizando React.Js. Para realizar esse projeto, precisei utilizar uma biblioteca do React chamada React-Router-Dom, para criar as páginas da aplicação, criando rotas protegidas e aninhadas. Além disso, para salvar os dados do usuário consumi uma API com a bliblioteca Axios. No momento ele ainda não está responsivo, mas em breve estarei deixando seu layout mais moderno.",
        cover: dindin,
        previws: [dindinPrev1, dindinPrev2],
        tecnologies: ["React.js", "JavaScript", "API REST", "Node.js", "Axios"],
        areas: ["Desenvolvimento Web", "Web Design"],
        link: "https://sistema-financeiro-blond.vercel.app/"
    }
]