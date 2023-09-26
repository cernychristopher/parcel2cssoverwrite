import * as React from 'react'

import { Header } from './Header'
import styles from './styles.css'

type Props = {
    children: React.ReactNode
}

export const Template = ({ children }: Props) => (
    <div className={styles.outerWrapper}>
        <Header />
        <div style={
            {display: 'flex', flexDirection: "column", alignItems: "stretch", flexWrap: "wrap"}
        } className={styles.innerWrapper}>
            <main role="main" data-field-id="content" className={styles.content}>
                {children}
            </main>
        </div>
    </div>
)
