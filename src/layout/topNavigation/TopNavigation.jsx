import React from 'react';
import { Link } from "react-router-dom";

export default function TopNavigation() {
   return (
      <>
         <div className="top-navigation">
            {/* sidebar */}
            <div className="logo-wrapper">
               <h2>
                  <Link to="/">ECom</Link>
               </h2>
            </div>

            {/* profile sidebar */}
            <div className="top-menu">

               <div className="top-user top-select">
                  {/* <FormikSelect
                     name="language"
                     options={[
                        { value: 1, label: "English" },
                        { value: 2, label: "Bangla" },
                     ]}
                     value={values?.language}
                     onChange={(valueOption) => {
                        dispatch(setLanguageAction(valueOption));
                        setFieldValue("language", valueOption);
                     }}
                     errors={errors}
                     touched={touched}
                     placeholder="Language"
                  /> */}
               </div>
               <div className="profile-sidebar-toggle mx-3">
                  <span>
                     <i className="fa fa-cart-plus"></i>
                  </span>
                  <span className="badge">
                     {0}
                  </span>
               </div>
               <div
                  className="top-user"
               >
                  <span>
                     <i className="fa fa-user"></i>
                  </span>
               </div>
            </div>
         </div>
      </>
   );
}
