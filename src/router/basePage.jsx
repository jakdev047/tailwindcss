import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// layout
import TopNavigation from './../layout/topNavigation/TopNavigation';
import FooterSection from "../layout/footer/FooterSection";
import Sidebar from "../layout/sidebar/Sidebar";


// module
const Dashboard = lazy(() => import("../modules/dashboard/index"));
const Inventory = lazy(() => import("../modules/Inventory/index"));

const BasePage = () => {

   return (
      <div className="main mobile:relative h-screen mobile:auto tablet:h-auto desktop:h-auto">
         <BrowserRouter>
            {/* topNavigation */}
            <div className="top-navigation-wrapper">
               <TopNavigation />
            </div>

            {/* sidebar section */}
            <div className="sidebar width-15">
               <Sidebar />
            </div>

            {/* body */}
            <div className="body width-85">
               {/* body-inner */}
               <div className="body-inner">
                  <Suspense fallback={<div>Loading...</div>}>
                     <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route exact path="/inventory" component={Inventory} />
                        <Route exact path="/documents" component={() => <h2>Documents</h2>} />
                        <Route exact path="/settings" component={() => <h2>Settings</h2>} />
                        <Route path="/error" component={() => <h1>Error 404!</h1>} />
                        <Redirect to="/error" />
                     </Switch>
                  </Suspense>
               </div>
            </div>

            {/* footer */}
            <div className="footer">
               <FooterSection />
            </div>
         </BrowserRouter>
      </div>
   );
};

export default BasePage;
