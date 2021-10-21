import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
// incomplete Pages
import summary from '../pages/incompletePages/summaryPage';
import orderList from '../pages/incompletePages/orderPage';
import addNewFood from '../pages/incompletePages/addNew';
import foodList from '../pages/incompletePages/foodList';
import addNewCategory from '../pages/incompletePages/addNewCategory';
import profile from '../pages/incompletePages/profile';
import settings from '../pages/incompletePages/settings';
import logout from '../pages/incompletePages/logout';
import registration from '../pages/incompletePages/registration';
import Login from '../components/Login';
export default function Router() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/summary" component={ summary } />
                    <Route exact path="/order-list" render={ orderList } />
                    <Route exact path="/add-new/:food" component={ addNewFood } />
                    <Route exact path="/food-list" component={ foodList } />
                    <Route exact path="/add-new/:category" component={ addNewCategory } />
                    <Route exact path="/category-list" component={ categoryList } />
                    <Route exact path="/profile" component={ profile } />
                    <Route exact path="/settings" component={ settings } />
                    <Route exact path="/logout" component={ logout } />
                    <Route exact path="/registration" component={ registration } />
                    <Route path="/login">{ login ? <Redirect to="/registration" /> : <Login /> }</Route>
                    <Route component={ NotFound } />
                </Switch>
            </Router>

        </div>
    )
}
