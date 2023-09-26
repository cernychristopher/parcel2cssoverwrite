import * as React from 'react'

import { Text } from 'shared/components/Text'

import { AppLink, InternalProps as AppLinkProps } from 'components/AppLink'

import styles from './styles.css'
import templateStyles from './components/template/styles.css'

type OverviewLinkProps = AppLinkProps & { label: string }

const OverviewLink = ({ label, ...linkProps }: OverviewLinkProps) => (
    <AppLink {...linkProps} className={styles.overviewLink}>
            <div>
                <Text className={templateStyles.iconBarLinkText}>{label}</Text>
            </div>
    </AppLink>
)

const Overview = () => (
    <>
        <strong>Welcome</strong>
        <OverviewLink url="a" label="Feature A" />
        <OverviewLink url="b" label="Feature B" />
        <OverviewLink url="c" label="Feature C" />
    </>
)

export default Overview
