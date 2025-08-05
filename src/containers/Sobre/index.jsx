import imgSobre from "../../assets/img/foto.jpg";

import { ContainerMain, Container, Habilidades } from "./styles";

function Sobre() {
  return (
    <>
        <ContainerMain>
          <h2>Sobre Mim</h2>

          <Container>
            <img src={imgSobre} />

            <div>
              <h2>Desenvolvedor com paixão por criar soluções digitais</h2>
              <p>
                Sou desenvolvedor front-end com foco em criar interfaces
                modernas, responsivas e com ótima experiência para o usuário.
                Tenho experiência em projetos freelance e acadêmicos,
                trabalhando com tecnologias como HTML5, CSS3, JavaScript e
                React.
              </p>
              <p>
                Atualmente também atuo na área de redes em uma empresa de
                telecomunicações, o que me deu uma base sólida em tecnologia,
                lógica e resolução de problemas.
              </p>
              <p>
                Sou proativo, gosto de aprender coisas novas e estou sempre em
                busca de evolução profissional. Meu objetivo é contribuir em
                projetos que entreguem valor real ao usuário, combinando design
                funcional com código limpo e eficiente.
              </p>

              <Habilidades class="habilidades">
                <span class="tag-habilidades">HTML5</span>
                <span class="tag-habilidades">CSS3</span>
                <span class="tag-habilidades">JavaScript</span>
                <span class="tag-habilidades">React</span>
                <span class="tag-habilidades">PHP</span>
                <span class="tag-habilidades">MySQL</span>
                <span class="tag-habilidades">Node.js</span>
              </Habilidades>
            </div>
          </Container>
        </ContainerMain>
      
    </>
  );
}

export default Sobre;
