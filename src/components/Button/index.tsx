import Link from 'next/link'
import { FC } from 'react'
import { StyledButton } from './styled'
import { SpaceProps } from 'styled-system'

export interface IButton {
  secondary?: boolean
  href?: string
  label?: string | number
  type?: 'button' | 'submit' | 'reset'
  onClick?: VoidFunction
}

export const Button: FC<IButton & SpaceProps> = ({
  label,
  secondary,
  type,
  href,
  onClick,
  ...props
}) => {
  if (href) {
    return (
      <Link href={href} passHref>
        <StyledButton
          {...props}
          secondary={secondary}
          type={type ?? 'button'}
          {...props}
          onClick={onClick}
        >
          {label}
        </StyledButton>
      </Link>
    )
  }

  return (
    <StyledButton
      {...props}
      secondary={secondary}
      type={type ?? 'button'}
      {...props}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  )
}
