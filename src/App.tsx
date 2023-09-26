import * as React from 'react'
import { createBrowserHistory } from 'history'

import { Route, Router, Switch } from 'react-router-dom'

import { Template } from 'components/template'
import ErrorBoundary from 'components/ErrorBoundary'

const FeatureC = React.lazy(() => import('./features/featureC/FeatureC'))
const FeatureB = React.lazy(() => import('./features/featureB/FeatureB'))
const FeatureA = React.lazy(() => import('./features/featureA/FeatureA'))
const Overview = React.lazy(() => import('./Overview'))

const history = createBrowserHistory()

export const App = () =>
        (
                <React.StrictMode>
                    <ErrorBoundary>
                        <Router history={history}>
                            <Template>
                                <React.Suspense fallback={null}>
                                    <Switch>
                                        <Route path="/" component={Overview} exact/>
                                        <Route path="/overview" component={Overview} exact/>
                                        <Route path="/a" component={FeatureA} exact/>
                                        <Route path="/b" component={FeatureB} exact/>
                                        <Route path="/c" component={FeatureC} exact/>
                                    </Switch>
                                </React.Suspense>
                            </Template>
                        </Router>
                    </ErrorBoundary>
                </React.StrictMode>
        )
