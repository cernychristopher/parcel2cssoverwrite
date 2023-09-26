import * as React from 'react'

import { Text } from 'shared/components/Text'

import { AppLink, InternalProps as AppLinkProps } from 'components/AppLink'

import styles from './styles.css'

type HeaderLinkProps = AppLinkProps & { label: string }

const HeaderLink = ({ label, ...linkProps }: HeaderLinkProps) => (
    <AppLink className={styles.iconBarLink} {...linkProps}>
        <Text className={styles.iconBarLinkText}>{label}</Text>
    </AppLink>
)

export const Header = () => (
    <header className={styles.topNavbar}>
        <div className={styles.iconBar} style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'stretch'
        }}>
                <HeaderLink url="a" label="Feature A" />
                <HeaderLink url="b" label="Feature B" />
                <HeaderLink url="c" label="Feature C" />
                <HeaderLink url="overview" label="Dashboard" />
        </div>
    </header>
)
