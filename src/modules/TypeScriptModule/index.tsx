import React from "react";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import TableCardHeading from "./components/TableCardHead";

export default function TypeScriptModule() {
  const parsonName = {
    first: "Jubayer",
    last: "Khan",
  };
  const parsons = [
    {
      first: "Jubayer",
      last: "Khan",
    },
    {
      first: "Alam",
      last: "Khan",
    },
    {
      first: "Jubayer",
      last: "Khan",
    },
  ];
  return (
    <>
      <div className="table-card">
        <TableCardHeading>
          <Heading>Typescript</Heading>
        </TableCardHeading>
        <div className="table-card-body">
          <div className="table-card-content vertical-scroll-table">
            <div className="container">
              <Greet name="Font Size" fontSize={18} isLoggedIn={false} />
              <Greet name="Font Size" isLoggedIn={true} />
              <Person name={parsonName} />
              <PersonList parsons={parsons} />
            </div>
          </div>
          <div className="table-card-pagination"></div>
        </div>
      </div>
    </>
  );
}
