import { useState } from "react";
import { ContainerMain, ContainerGaleria, Modal } from "./styles";
import certificado1 from "../../assets/certificados/certificadoCimol1.jpeg";
import certificado2 from "../../assets/certificados/certificadoUnigran1.jpeg";
import certificado3 from "../../assets/certificados/certificadosFrontend1.png";

function Certificados() {
  const [imagemSelecionada, setImagemSelecionada] = useState(null);
  const certificados = [
    { id: 1, src: certificado1, alt: "Certificado 1",name:"Certificado Cimol" },
    { id: 2, src: certificado2, alt: "Certificado 2",name:"Certificado Unigran" },
    { id: 3, src: certificado3, alt: "Certificado 3",name:"Certificado Dev Club" },
  ];

  return (
    <ContainerMain>
      <h2>Meus Certificados</h2>
      <ContainerGaleria>
        {certificados.map((cert) => (
          <div key={cert.id}>
            <h3>{cert.name}</h3>
            <img
              src={cert.src}
              alt={cert.alt}
              className="thumb-certificado"
              onClick={() => setImagemSelecionada(cert.src)}
            />
          </div>
        ))}
      </ContainerGaleria>

      {imagemSelecionada && (
        <Modal onClick={() => setImagemSelecionada(null)}>
          <span className="fechar">&times;</span>
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
