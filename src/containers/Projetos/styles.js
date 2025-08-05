import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem; /* espaçamento entre itens */
  max-width: 1100px; /* 4 colunas de 300px = 1200px */
  margin: 30px auto;
  `

export const ContainerMain = styled.div`
  padding-top: 100px ;
  padding-left: 80px;
  h2 {
    font-size: 42px;
    position: relative;
  }
  &::after {
    content: "";
    position: absolute;
    left: 80px;
    top: 145px;
    width: 100px;
    height: 4px;
    background-color: #4d7cfe;
  }
`;