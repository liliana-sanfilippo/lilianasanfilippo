import React from 'react'

// Note that create-react-navi-app will always show an error screen when this
// is rendered. This is because the underlying react-scripts package shows
// the error screen when a NotFoundError is thrown, even though it's caught
// by <NotFoundBoundary>. To see the error rendered by this function,
// you'll just need to close the error overlay with the "x" at the top right.
function NotFoundPage() {
    return (<div>
            <h1>404 - Not Found (Individual)</h1>
        </div>)
}

export default NotFoundPage;