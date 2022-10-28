import styled from 'styled-components';

const Header = styled.header`
  background-color: ${({ theme }) => theme.color.header};
  max-width: ${({ theme }) => theme["max-width"]};
  margin:auto;
  padding: 4rem 0;
`;



export const Logo= styled.img`
width: 300px;
padding: 2rem;
`;

export default Header;
