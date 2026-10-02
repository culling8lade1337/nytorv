import type { ReactNode } from 'react'
type Props = { href: string; variant?: 'primary' | 'ghost' | 'text'; external?: boolean; children: ReactNode }
export function Button({ href, variant = 'primary', external, children }: Props) {
  return <a className={`btn btn--${variant}`} href={href} {...(external && { target: '_blank', rel: 'noopener noreferrer' })}>{children}</a>
}
