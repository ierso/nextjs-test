import styled from "@emotion/styled";

const Container = styled.div`
  max-width: ${props => props.theme.type.width.maxWidth};
  width: ${props => props.theme.type.width.width};
  margin: 0 auto;
  padding: 0 1em;
`;

export default Container;
