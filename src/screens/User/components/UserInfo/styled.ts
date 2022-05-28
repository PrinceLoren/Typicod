import styled from '@emotion/styled'

export const MainContent = styled.div`
  width: 100%;
  border: 1px solid blue;
  margin: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme.colors.neutral100};
`

export const InfoText = styled.p`
  font-size: 2.2rem;
`
