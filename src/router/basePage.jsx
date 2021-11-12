import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// layout
import TopNavigation from './../layout/topNavigation/TopNavigation';


// module
const Dashboard = lazy(() => import("../modules/dashboard/index"));

const BasePage = () => {

   return (
      <div className="main">
         <BrowserRouter>
            {/* topNavigation */}
            <div className="top-navigation-wrapper">
               <TopNavigation />
            </div>


            {/* sidebar section */}


            {/* body */}
            <div>
               {/* body-inner */}
               <div className="body-inner">
                  <Suspense fallback={<div>Loading...</div>}>
                     <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route exact path="/inventory" component={() => <h2>Inventory</h2>} />
                        <Route exact path="/documents" component={() => <h2>Documents</h2>} />
                        <Route exact path="/settings" component={() => <h2>Settings</h2>} />
                        <Route path="/error" component={() => <h1>Error 404!</h1>} />
                        <Redirect to="/error" />
                     </Switch>
                  </Suspense>
               </div>
            </div>

            {/* footer */}
            <div className="footer"></div>
         </BrowserRouter>
      </div>
   );
};

export default BasePage;
