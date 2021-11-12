import React from 'react';
import { shallowEqual, useSelector } from "react-redux";

export default function Dashboard() {
   const { appName } = useSelector(
      (state) => state?.localStorage,
      shallowEqual
   );
   return (
      <>
         <h1 className="title">{appName}</h1>
      </>
   );
}
