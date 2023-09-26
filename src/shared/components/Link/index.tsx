import cn from 'classnames'
import * as React from 'react'

import { Text } from 'shared/components/Text'

import styles from './styles.css'

type TextProps = React.ComponentPropsWithoutRef<typeof Text>
export type BaseLinkProps = Omit<TextProps, 'as' | 'children'> &
    React.ComponentPropsWithoutRef<'a'> & {
        children?: React.ReactNode
        variant?: 'plain' | 'button' | 'icon'
        title?: string
    }
export const useBaseLink = ({
    className,
    variant,
    ...props
}: Omit<BaseLinkProps, 'children'>) => {
    return {
        className: cn(
            props.color && styles[props.color],
            variant && styles[variant],
            className
        ),
        ...props,
    }
}
