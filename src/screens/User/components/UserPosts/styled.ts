import styled from '@emotion/styled'

export const MainContent = styled.div`
  width: 100%;
  border: 1px solid black;
  margin: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 0.8rem;
`

export const PostTitle = styled.p`
  font-size: 3.2rem;
  color: ${(props) => props.theme.colors.red};
`

export const PostText = styled.p`
  font-size: 1.8rem;
`

export const PostContent = styled.div`
  background: ${(props) => props.theme.colors.neutral100};
  padding: 2rem;

  &:hover {
    background: ${(props) => props.theme.colors.neutral200};
  }

  transition: all 0.3s ease;
`
