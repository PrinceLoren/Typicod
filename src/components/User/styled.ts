import styled from '@emotion/styled'

export const UserContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 30rem;
  align-items: center;
  justify-content: space-between;
  height: auto;
  border: 0.2rem solid black;
  border-radius: 0.8rem;
  overflow: hidden;
  margin: 1rem auto;
  padding: 1rem;
`

export const UserPhoto = styled.div`
  width: 100%;
`

export const InfoText = styled.p<{ label?: boolean }>`
  color: ${(props) => props.label && props.theme.colors.red};
  font-size: 2rem;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 2rem 0;
`
