import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem; /* espaçamento entre itens */
  max-width: 1000px; /* 4 colunas de 300px = 1200px */
  margin: 100px auto;
  `