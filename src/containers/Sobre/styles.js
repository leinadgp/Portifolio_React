import styled from "styled-components";

export const ContainerMain = styled.div`
  padding-top: 60px ;
  padding-left: 80px;
  h2 {
    font-size: 42px;
    margin-bottom: 40px;
    position: relative;
  }
  &::after {
    content: "";
    position: absolute;
    left: 85px;
    top: 115px;
    width: 100px;
    height: 4px;
    background-color: #4d7cfe;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  align-items: center;
  max-width: 1200px;

  p {
    margin-bottom: 20px;
    color: #bbb;
  }
  h2 {
    margin-bottom: 30px;
  }
  img {
    height: 400px;
    background-color: #161616;
    border-radius: 35px;
  }
`;

export const Habilidades = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;

  span {
    background-color: rgba(77, 124, 254, 0.2);
    color: #4d7cfe;
    padding: 8px 15px;
    border-radius: 20px;
    margin-right: 10px;
    margin-bottom: 10px;
    font-size: 14px;
  }
`;
