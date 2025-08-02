import styled from 'styled-components'
import { Link } from 'react-router-dom';



export const Background = styled.div`
  background-image: url(${(props) => props.$img});
  height: 90vh;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  max-width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    max-width: 100%;
    height: 110%;
    background-color: rgba(0, 0, 0, 0.5);
  }
`
export const ContainerMain = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  margin-left: 190px;
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
  position: fixed;
  top: 70px;
  right: 40px;
}
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #4d7cfe;
  font-size: 18px;

  &:hover {
    opacity: 0.5;
  }
`;