import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Navbar } from './components/Navbar/Navbar'
import { Main } from './pages/Main/Main'
import { Auth } from './pages/Auth/Auth'
import { Doctors } from './pages/Doctors/Doctors'
import { DocProfile } from './pages/DocProfile/DocProfile'
import { DocBooking } from './pages/DocBooking/DocBooking'

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" component={Main} exact />
                    <Route path="/auth" component={Auth} exact />
                    <Route path="/doctors" component={Doctors} exact />
                    <Route path="/doctors/:id" component={DocProfile} exact />
                    <Route path="/doctors/:id/booking" component={DocBooking} exact />
                </Switch>
            </Router>
        </div>
    )
}

export default App
