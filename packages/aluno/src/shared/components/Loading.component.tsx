import styled from "styled-components"

const StyledLoading = styled.div`
  display: flex;
  background: blue;
  width: 100%;
  height: 100%;
  flex-direction: column;
  color: white;
`;

export const Loading = () => {
  return (
    <StyledLoading>
      <p>Ta Carregando...</p>
    </StyledLoading>
  )
}