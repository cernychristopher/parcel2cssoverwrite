import cn from 'classnames'
import * as React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'

import styles from './styles.css'

type As = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'span' | 'div' | 'a' | typeof ReactRouterLink

type TextAlign = 'left' | 'center' | 'right'

type Props<T extends As> = {
    align?: TextAlign
    color?: 'inverse' | 'primary' | 'secondary' | 'tertiary' | 'quaternary'
    fontWeight?: 'bold' | 'strong' | 'heavy'
    uppercase?: boolean
    className?: string
    children: React.ReactNode
    as?: T
} & React.ComponentPropsWithoutRef<T>

const TextComponent = <T extends As = 'div'>(
    { as, align, uppercase, className, children, color, fontWeight, ...props }: Props<T>,
    ref: React.Ref<unknown>
) => {
    const hasAlias = as !== undefined
    const resolvedTextAlign = align ?? 'left'

    return React.createElement(
        as ?? 'div',
        {
            ref,
            className: cn(
                !hasAlias && styles.defaultText,
                uppercase && styles.uppercase,
                resolvedTextAlign === 'right' && styles.alignRight,
                resolvedTextAlign === 'center' && styles.alignCenter,
                color && styles[color],
                fontWeight && styles[fontWeight],
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
