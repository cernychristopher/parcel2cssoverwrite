import * as React from 'react'
import cn from "classnames";
import { Text } from 'components/Text'
import styles from './styles.css'

type Props = {
    size: 'small' | 'medium' | 'large' | 'xlarge'
    className?: string
    children: React.ReactNode
}

export const Heading = ({ size, className, children }: Props) => {
    let as
    switch (size) {
        case 'small':
            as = 'h3' as const
            break
        case 'medium':
            as = 'h2' as const
            break
        case 'large':
        case 'xlarge':
            as = 'h1' as const
            break
    }

    return (
            <Text as={as} className={cn(className, size === 'xlarge' && styles.xlarge)}>
                {children}
            </Text>
    )
}
