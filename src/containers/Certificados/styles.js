import styled, { keyframes } from "styled-components";

export const ContainerMain = styled.div`
  padding-top: 100px ;
  padding-left: 80px;
  h2 {
    font-size: 42px;
    margin-bottom: 50px;
    position: relative;
  }
  &::after {
    content: "";
    position: absolute;
    left: 85px;
    top: 150px;
    width: 100px;
    height: 4px;
    background-color: #4d7cfe;
  }
   @media (max-width: 768px) {
     padding: 90px 10px;
  h2 {
    font-size: 22px;
    position: relative;
  }
  &::after {
    content: "";
    position: absolute;
    left: 10px;
    top: 115px;
      }
   }
`;
export const ContainerGaleria = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  h3{
    font-size: 1rem;
    max-width: 210px;
    text-align: center;
  }
  img {
    width: 200px;
    height: auto;
    cursor: pointer;
    border-radius: 8px;
    transition: transform 0.3s;
  }
  img:hover {
    transform: scale(1.05);
  }
`;
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;

  span {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 2rem;
    color: white;
    cursor: pointer;
  }
  img {
    max-width: 90%;
    max-height: 80%;
    border-radius: 8px;
    box-shadow: 0 0 15px #fff;
    z-index: 999;
  }
`;
