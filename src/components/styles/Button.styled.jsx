import styled from 'styled-components';

const Button = styled.button`
    background: ${({bg}) => bg || "white" };
    color: ${({color}) => color || "white" };
`;

export default Button;
