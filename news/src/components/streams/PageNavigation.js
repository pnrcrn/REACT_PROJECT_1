import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import StreamDelete from './StreamDelete';
import {BrowserRouter as Route,Router} from 'react-router-dom';

function PageNavigation() {
    return (
        <div>
            <BrowserRouter>
                <Router>
                    <Route path='/StreamDelete' component={StreamDelete}></Route>
                </Router>
            </BrowserRouter>

        </div>
    )
}
export default PageNavigation;
