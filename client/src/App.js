import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Navbar } from './components/Navbar/Navbar'
import { Main } from './pages/Main/Main'
import { Doctors } from './pages/Doctors/Doctors'

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" component={Main} exact />
                    <Route path="/doctors" component={Doctors} exact />
                </Switch>
            </Router>
        </div>
    )
}

export default App
