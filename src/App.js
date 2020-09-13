import React from 'react' 
//npm install react-router-dom
import Login from './Login'
import SocialDashboard from './SocialDashboard'
import {BrowserRouter,Route} from 'react-router-dom'

function App () {
    return (
        <BrowserRouter>
            <div>
                <Route path ="/" component={Login} exact={true} />
                <Route path ="/SocialDashboard" component={SocialDashboard} exact={true}/>
            </div>      
        </BrowserRouter>
    )
}

export default App

