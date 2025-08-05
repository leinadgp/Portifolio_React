import styled, { keyframes } from "styled-components";

export const ContainerMain = styled.div`
  padding-top: 100px;
  padding-left: 80px;
  h2 {
    font-size: 42px;
    margin-bottom: 25px;
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
   @media (max-width: 768px) {
     padding-top: 70px ;
     padding-left: 20px;
  h2 {
    font-size: 22px;
    position: relative;
  }
  &::after {
    content: "";
    position: absolute;
    left: 20px;
    top: 95px;
      }
   }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;

  p {
    font-size: 30px;
    margin: 20px;
    max-width: 1500px;
    color: #bbb;
    margin-bottom: 40px;
    text-align: justify;
  }
  a {
    cursor: pointer;
    transition: transform 0.4s ease-in-out;
    &:hover {
      transform: translateY(-10px);
    }
  }
  @media (max-width: 768px) {
    p {
      font-size: 17px;
    }
  }
`;

export const ButtonContato = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  max-width: 800px;
  margin: 0 auto;

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px 25px;
    border-radius: 10px;
    font-weight: 500;
    min-width: 160px;
    text-decoration: none;
    color: white;
  }
  @media (max-width: 768px) {
    a {
      min-width: 100px;
    }
  }
`;

export const Whatsapp = styled.a`
  background-color: #25d366;
`;
export const Email = styled.a`
  background-color: #ea4335;
`;
export const Linkedin = styled.a`
  background-color: #0077b5;
`;
export const Github = styled.a`
  background-color: #333;
`;
