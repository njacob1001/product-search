import { FC } from 'react'
import { IconProps } from '.'

export const Arrow: FC<IconProps> = ({ size = 16, color = '#000' }) => (
  <svg width={`${size * (9 / 14)}px`} height={`${size}px`} viewBox="0 0 9 14" xmlns="http://www.w3.org/2000/svg">
    <path stroke={color} fill="none" fillRule="evenodd" d="M1 1.343L6.657 7 1 12.657"></path>
  </svg>
)
