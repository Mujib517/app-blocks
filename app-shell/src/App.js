import React from 'react'
const App1 = React.lazy(() => import('App1/Entry'))
const App2 = React.lazy(() => import('App2/Entry'))

const App = () => <React.Suspense fallback="Failed to load">
    <h1>App-shell works</h1>
    <App1 />
    <App2 />
</React.Suspense>

export default App
