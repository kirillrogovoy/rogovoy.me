import NextLink, { LinkProps as NextLinkProps } from 'next/link'
import { PropsWithChildren } from 'react'
export type LinkProps = PropsWithChildren<
  NextLinkProps & {
    style?: 1 | 2
    newTab?: boolean
  }
>
export function Link(props: LinkProps) {
  let className = ''
  switch (props.style) {
    case 1:
      className = 'text-link1 hover:text-link1hover underline hover:no-underline'
      break
    case 2:
      className = 'text-link2 hover:text-link2hover font-semibold'
      break
    case undefined:
      className = ''
      break
  }

  const targetProps: {[key: string]: string} = props.newTab ? { target: '_blank', rel: 'noreferrer noopener' } : {}

  const passProps = { ...props }
  delete passProps.newTab
  delete passProps.style

  const isExternalLink = props.href.toString().startsWith('http')

  const Wrapper = ({ children }: PropsWithChildren<{}>) => isExternalLink ? <>{children}</> : <NextLink {...passProps}>{children}</NextLink>

  if (isExternalLink) {
    delete passProps.href
    targetProps.href = props.href.toString()
  }

  return (
    <Wrapper>
      <a className={className} {...targetProps}>
        {props.children}
      </a>
    </Wrapper>
  )
}
