import cn from "classnames";
import * as React from 'react'

import styles from './styles.css'

type Props ={
    size: 'small' | 'medium' | 'large' | 'xlarge'
    className?: string
    children: React.ReactNode
}

export const Heading = ({ size, className, children }: Props) => {
    let as
    switch (size) {
        case 'small':
            as = 'h3'
            break
        case 'medium':
            as = 'h2'
            break
        case 'large':
        case 'xlarge':
            as = 'h1'
            break
    }

    return React.createElement(
            as,
            {
                className: cn(className, size === 'xlarge' && styles.xlarge),
            },
            children
    )
}
