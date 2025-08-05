import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const ContainerMain = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;
  
  h1 {
  font-size: 2.5rem;
  line-height: 1.1;
  margin-bottom: 20px;
  letter-spacing: -4px;
  }
  h1 span {
  color: #4d7cfe;
  }
  p {
  font-size: 20px;
  margin-bottom: 20px;
  max-width: 600px;
  color: #bbb;
  margin-bottom: 40px;
  }
  img {
  height: auto;
  }
@media (max-width: 768px) {
  flex-direction: column;
  padding: 0 10px;
  margin-top: 95px;
  justify-content: flex-start;
  h1{
    font-size: 1.7rem;
    text-align: start;
    padding-left: 15px;
    line-height: 1;
  }
  img {
  height: 200px
  }
}


`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #4d7cfe;
  font-size: 18px;
  display: inline-block;
  padding: 15px 30px;
  background-color: #4d7cfe;
  color: #fff;
  font-weight: bold;
  border-radius: 5px;

  &:hover {
    opacity: 0.5;
  }
`;