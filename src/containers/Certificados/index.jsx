import { useState } from "react";
import { ContainerMain, ContainerGaleria, Modal } from "./styles";
import cimol from "../../assets/certificados/certificadoCimol1.jpeg";
import unigran from "../../assets/certificados/certificadoUnigran1.jpeg";
import devCluFrontEnd from "../../assets/certificados/certificadosFrontend1.png";
import olimpio from "../../assets/certificados/certificadoOlimpio.jpeg";
import ouroModerno from "../../assets/certificados/certificadoPacoteOffice.jpeg";
import devClubYoutube from "../../assets/certificados/devClub.png";
import devGit from "../../assets/certificados/git.png";
import react from "../../assets/certificados/react.png";

function Certificados() {
  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const certificados = [
    {
      id: 1,
      src: devCluFrontEnd,
      alt: "Certificado",
      name: "Desenvolvedor Front End",
    },
    {
      id: 2,
      src: cimol,
      alt: "Certificado",
      name: "Tecnico em Informatica",
    },
    {
      id: 3,
      src: unigran,
      alt: "Certificado",
      name: "Tecnologo em Analise e desenvolvimento de Sistemas",
    },
    {
      id: 4,
      src: olimpio,
      alt: "Certificado",
      name: "Manutenção Computadores",
    },
    {
      id: 5,
      src: ouroModerno,
      alt: "Certificado",
      name: "Pacote Office",
    },
    {
      id: 6,
      src: devClubYoutube,
      alt: "Certificado",
      name: "Programador em 72H",
    },
    {
      id: 7,
      src: devGit,
      alt: "Certificado",
      name: "Git e GitHub",
    },
    {
      id: 8,
      src: react,
      alt: "Certificado",
      name: "React",
    },
  ];

  return (
    <ContainerMain>
      <h2>Meus Certificados</h2>
      <ContainerGaleria>
        {certificados.map((cert) => (
          <div key={cert.id}>
            <img
              src={cert.src}
              alt={cert.alt}
              className="thumb-certificado"
              onClick={() => setImagemSelecionada(cert.src)}
            />
            <h3>{cert.name}</h3>
          </div>
        ))}
      </ContainerGaleria>

      {imagemSelecionada && (
        <Modal
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setImagemSelecionada(null);
            }
          }}
        >
          <span className="fechar" onClick={() => setImagemSelecionada(null)}>
            &times;
          </span>
          <img
            className="imagem-grande"
            src={imagemSelecionada}
            alt="Certificado ampliado"
          />
        </Modal>
      )}
    </ContainerMain>
  );
}

export default Certificados;
