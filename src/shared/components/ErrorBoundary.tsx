import * as React from 'react'

type State = {
    hasError: boolean
}

export default class ErrorBoundary extends React.PureComponent<unknown, State> {
    state = {
        hasError: false,
    }

    componentDidCatch() {
        this.setState({
            hasError: true,
        })
    }

    render() {
        const { hasError } = this.state
        const { children } = this.props

        return hasError ? (
            <>
                        <h1>Ooops! Something went wrong!</h1>
                        <button type="button" title="Try again" onClick={() => this.setState({ hasError: false })}>
                            Try again
                        </button>
            </>
        ) : (
            children
        )
    }
}
