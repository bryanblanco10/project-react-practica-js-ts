import { styled } from "styled-components"

interface Props {
  height?: number
}

export  const Flex = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export  const Container = styled.div<Props>`
  height: ${props => props.height}vh;
  width: 100%;
  background: red;
`;