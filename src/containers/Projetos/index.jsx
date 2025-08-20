import CardProjetos from "../../components/CardProjetos";

import imgDevMovies from "../../assets/img/dev-movies.png";
import imgListaTaregas from "../../assets/img/ListaTarefas.png";
import imgHamburgueria from "../../assets/img/hamburgueria.png";
import imgPptls from "../../assets/img/PPTLS.png";
import imgConversor from "../../assets/img/conversor.png";
import imgDevFruits from "../../assets/img/refriDev.png";
import imgStarbucks from "../../assets/img/starbucks.png";
import imgPetShoop from "../../assets/img/petshop.png";
import vitrineCriativa from "../../assets/img/vitrineCriativa.png";

import { Container, ContainerMain } from "./styles";

const projects = [
  {
    description: `Aqui você pode explorar e compartilhar suas criações artísticas de forma 
    prática e inspiradora. Nosso objetivo é criar um 
    espaço completo, onde escritores, artistas e amantes da criatividade possam se conectar, 
    compartilhar e se inspirar.`,
    title: "Vitrine Criativa",
    link: "https://feliperosa6567.github.io/vitrine_criativa/",
    img: vitrineCriativa,
    tec: {
      html: true,
      css: true,
      javascript: true,
      php: false,
      mysql: false,
      react: true,
    },
  },
  {
    description: `Aplicação web desenvolvida com React que permite explorar filmes,
              assistir trailers e acessar informações detalhadas como elenco,
              gêneros, créditos e vídeos relacionados. Os dados são consumidos
              em tempo real via API do TMDB.`,
    title: "Dev Movie",
    link: "https://leinadgp.github.io/projeto_dev_movie/",
    img: imgDevMovies,
    tec: {
      html: true,
      css: true,
      javascript: true,
      php: false,
      mysql: false,
      react: true,
    },
  },
  {
    description: `Este projeto é uma aplicação simples e funcional de lista de tarefas (To-Do List) desenvolvida com React. O objetivo foi praticar conceitos fundamentais do React como useState, componentização e Styled Components, além de trabalhar com props dinâmicas para estilização condicional.`,
    title: "Lista de Tarefas",
    link: "https://leinadgp.github.io/Lista_Tarefas/",
    img: imgListaTaregas,
    tec: {
      html: true,
      css: true,
      javascript: true,
      php: false,
      mysql: false,
      react: true,
    },
  },
  {
    description: `Site que simula o sistema de gerenciamento de uma hamburgueria, permitindo controle dinâmico do cardápio. Desenvolvido com HTML, CSS, JavaScript, PHP e MySQL, integra front-end e back-end para controle completo.`,
    title: "Hamburgueria",
    link: "https://danielguimaraes.infinityfree.me/",
    img: imgHamburgueria,
    tec: {
      html: true,
      css: true,
      javascript: true,
      php: true,
      mysql: true,
      react: false,
    },
  },
  {
    description: `Jogo interativo inspirado no clássico de Sheldon Cooper (The Big Bang Theory). Desenvolvido com HTML5, CSS3 e JavaScript, com lógica programada para determinar o vencedor de forma dinâmica.`,
    title: "Pedra, Papel, Tesoura, Lagarto e Spock 🖖",
    link: "https://leinadgp.github.io/ProjetoPPTLS_Bazinga/",
    img: imgPptls,
    tec: {
      html: true,
      css: true,
      javascript: true,
      php: false,
      mysql: false,
      react: false,
    },
  },
  {
    description: `Conversor de moedas criado com HTML, CSS 
    e JavaScript. Permite converter valores do Real brasileiro 
    para diversas moedas, incluindo dólar, euro, libra esterlina e bitcoin.`,
    title: "Conversor de Moedas",
    link: "https://leinadgp.github.io/projetoConversorMoeda/",
    img: imgConversor,
    tec: {
      html: true,
      css: true,
      javascript: true,
      php: false,
      mysql: false,
      react: false,
    },
  },
  {
    description: `Uma galeria interativa que apresenta sabores 
    fictícios de refrigerantes com animações suaves e design responsivo.`,
    title: "Dev Fruites",
    link: "https://leinadgp.github.io/Projeto_Refri_Dev/",
    img: imgDevFruits,
    tec: {
      html: true,
      css: true,
      javascript: true,
      php: false,
      mysql: false,
      react: false,
    },
  },
  {
    description: `Projeto replicando a página inicial da Starbucks,
     desenvolvido com HTML5, CSS3 e JavaScript puro. O objetivo foi 
     aprimorar habilidades de layout, responsividade e animações, recriando uma interface moderna e fiel ao design original da marca.`,
    title: "Copia Starbucks",
    link: "https://leinadgp.github.io/Replica-Starbuks/",
    img: imgStarbucks,
    tec: {
      html: true,
      css: true,
      javascript: true,
      php: false,
      mysql: false,
      react: false,
    },
  },
  {
    description: `Este é um projeto educacional desenvolvido 
    com o objetivo de praticar conceitos fundamentais de HTML e CSS,
     incluindo estruturação de conteúdo, estilização e princípios de design responsivo. 
     A página simula um site de cuidados com animais de estimação`,
    title: "Pagina Simples Pet Shope",
    link: "https://leinadgp.github.io/Projeto-Pet-Shope-Simples/",
    img: imgPetShoop,
    tec: {
      html: true,
      css: true,
      javascript: false,
      php: false,
      mysql: false,
      react: false,
    },
  },
];

function Projetos() {
  return (
    <>
      <ContainerMain>
        <h2>Meus Projetos</h2>
        <Container>
          {projects.map((project, index) => (
            <CardProjetos
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
              img={project.img}
              tec={project.tec}
            />
          ))}
        </Container>
      </ContainerMain>
    </>
  );
}

export default Projetos;
