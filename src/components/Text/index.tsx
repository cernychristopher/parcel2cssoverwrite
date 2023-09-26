import cn from 'classnames'
import * as React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'

import styles from './styles.css'

type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'span' | 'div' | 'a' | typeof ReactRouterLink

type Props<T extends As> = {
    className?: string
    children: React.ReactNode
    as?: T
} & React.ComponentPropsWithoutRef<T>

const TextComponent = <T extends As = 'div'>(
    { as, className, children, ...props }: Props<T>,
    ref: React.Ref<unknown>
) => {
    const hasAlias = as !== undefined

    return React.createElement(
        as ?? 'div',
        {
            ref,
            className: cn(
                !hasAlias && styles.defaultText,
                className
            ),
            ...props,
        } as any,
        children
    )
}

export const Text = React.forwardRef(TextComponent) as <T extends As = 'div'>(
    p: Props<T> & { ref?: React.Ref<HTMLElement> }
) => ReturnType<React.FunctionComponent>
