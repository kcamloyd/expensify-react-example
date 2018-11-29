// Higher Order Component (HOC) - a react component that renders another react component
// Goal is to reuse code
// Perform "render hijacking"
// Prop manipulation
// Abstract the state

import React from 'react'
import ReactDOM from 'react-dom'

// Regular component:
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

// HOC:
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please don't share.</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

// Second HOC example:
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { !!props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please authenticate to view info</p> }
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details" />, document.getElementById('app'))