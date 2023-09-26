import * as React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'

import { BaseLinkProps, useBaseLink } from '/components/Link'
import { Text } from 'components/Text'

export type InternalProps = BaseLinkProps & {
    url: string
    state?: Record<string, unknown>
}

export const AppLink = React.forwardRef<HTMLAnchorElement, InternalProps>(
    ({ children, url, state, ...props }, ref) => (
        <Text as={ReactRouterLink} innerRef={ref} to={{ pathname: `/${url}`, state }} {...useBaseLink(props)}>
            {children}
        </Text>
    )
)
