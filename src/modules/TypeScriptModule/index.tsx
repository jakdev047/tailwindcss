import React from "react";
import { Greet } from "./components/Greet";

export default function TypeScriptModule() {
  return (
    <>
      <div className="table-card">
        <div className="table-card-heading">
          <h2 className="title font-roboto">Typescript</h2>
        </div>
        <div className="table-card-body">
          <div className="table-card-content vertical-scroll-table">
              <div className="container bg-success px-4">
                <Greet name="String" />
              </div>
          </div>
          <div className="table-card-pagination"></div>
        </div>
      </div>
    </>
  );
}
