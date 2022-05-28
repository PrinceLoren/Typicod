import styled from '@emotion/styled'
import { IButton } from '@/components/Button/index'
import { space, SpaceProps } from 'styled-system'

export const StyledButton = styled.button<IButton & SpaceProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  font-weight: 600;
  white-space: nowrap;
  border: none;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  background: ${(props) =>
    props.secondary ? props.theme.colors.red : props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  ${space}
`
