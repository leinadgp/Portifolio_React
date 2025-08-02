import { useEffect, useRef } from "react";
import { Background, ContainerMain, StyledLink } from "./styles";

function Home() {
  const spanRef = useRef(null);
  const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const palavras = ["Front End", "Back End", "Full Stack", "Web Developer"];
  let palavraAtual = 0;
  let intervalo = null;

  useEffect(() => {
    function animarTexto(novaPalavra) {
      let contador = 0;
      clearInterval(intervalo);

      const span = spanRef.current;
      if (!span) return;

      const comprimento = Math.max(span.innerText.length, novaPalavra.length);

      intervalo = setInterval(() => {
        span.innerText = novaPalavra
          .padEnd(comprimento, " ")
          .split("")
          .map((letter, index) => {
            return index < contador
              ? letter
              : alfabeto[Math.floor(Math.random() * alfabeto.length)];
          })
          .join("");

        if (contador >= novaPalavra.length) {
          clearInterval(intervalo);
          span.innerText = novaPalavra;
        }

        contador += 1 / 3;
      }, 50);
    }

    const trocaAutomatica = setInterval(() => {
      palavraAtual = (palavraAtual + 1) % palavras.length;
      const novaPalavra = palavras[palavraAtual];
      animarTexto(novaPalavra);
    }, 6000);

    // Primeira animação
    animarTexto(palavras[palavraAtual]);

    // Limpa intervalos quando sair da página
    return () => {
      clearInterval(trocaAutomatica);
      clearInterval(intervalo);
    };
  }, []);

  return (
    <Background>
      <ContainerMain className="principal">
        <div>
          <h1 className="txtEfeito">
            Daniel Guimarães Dev{" "}
            <span ref={spanRef} data-value="Front End">Front End</span>.
          </h1>

          <p>
            Desenvolvedor com experiência em projetos que unem
            criatividade, performance e usabilidade.
          </p>
          <StyledLink to="/projetos">Ver Projetos</StyledLink>
        </div>
        <div className="container-imgprincipal">
          <img
            className="imgprincipal"
            src="./src/assets/img/img_principal.png"
            alt="Imagem principal"
          />
        </div>
      </ContainerMain>
    </Background>
  );
}

export default Home;
