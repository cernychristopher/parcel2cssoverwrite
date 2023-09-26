import cn from "classnames";
import { AppHeading } from "components/template/AppHeading";
import * as React from 'react'

import styles from './styles.css'

const FeatureC = () => <AppHeading className={cn(styles.featureC, styles.feature)}>This is Feature C</AppHeading>

export default FeatureC
