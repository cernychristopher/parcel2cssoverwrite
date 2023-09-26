import * as React from 'react'

import { Heading } from "components/Heading"

type Props = Omit<React.ComponentProps<typeof Heading>, 'size'>

export const AppHeading = ({ children, ...props }: Props) => (
        <>
            <Heading {...props} size="xlarge">
                {children}
            </Heading>
            <div>&nbsp;</div>
        </>
)
