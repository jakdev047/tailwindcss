import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// layout
import TopNavigation from './../layout/topNavigation/TopNavigation';
import FooterSection from "../layout/footer/FooterSection";
import Sidebar from "../layout/sidebar/Sidebar";


// module
const Dashboard = lazy(() => import("../modules/dashboard/index"));
const Inventory = lazy(() => import("../modules/inventory/index"));
const Documents = lazy(() => import("../modules/documents/index"));
const Settings = lazy(() => import("../modules/settings/index"));
const TypeScriptModule = lazy(() => import("../modules/TypeScriptModule/index.tsx"));

const BasePage = () => {

   return (
      <div className="main mobile:relative h-screen overflow-hidden">
         <BrowserRouter>
            {/* topNavigation */}
            <div className="top-navigation-wrapper">
               <TopNavigation />
            </div>

            {/* sidebar section */}
            <div className="sidebar width-15 sm:hidden block">
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
                        <Route exact path="/documents" component={Documents} />
                        <Route exact path="/settings" component={Settings} />
                        <Route exact path="/typescript" component={TypeScriptModule} />
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
