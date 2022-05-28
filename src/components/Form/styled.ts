import styled from '@emotion/styled'
import { Field } from 'formik'

export const StyledLabel = styled.label`
  font-size: 1.8rem;
`

export const StyledTextArea = styled(Field)`
  background-color: transparent;
  border: 0.2rem solid ${(props) => props.theme.colors.black};
  border-radius: 0.8rem;
  width: 100%;
  margin: 2rem 0;
  font-family: ${(props) => props.theme.fonts.default};
  font-size: 1.8rem;
  max-width: 80rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.black};

  &::placeholder {
    padding-left: 2rem;
  }
`

export const StyledInput = styled(StyledTextArea)`
  padding: 2rem 2rem 1.5rem;
`

export const StyledForm = styled.div`
  display: flex;
  margin: 5rem;
  flex-direction: column;
`
