import React from "react";

export default function Settings() {
  return (
    <>
      <div className="table-card">
        <div className="table-card-heading">
          <h2 className="title font-roboto">Settings</h2>
        </div>
        <div className="table-card-body">
          <div className="table-card-content vertical-scroll-table">
              <h2 className="text-18 font-roboto font-bold tracking-ls02 leading-28">Font Property</h2>
          </div>
          <div className="table-card-pagination"></div>
        </div>
      </div>
    </>
  );
}
