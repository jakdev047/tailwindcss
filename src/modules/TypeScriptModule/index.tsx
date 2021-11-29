import { useState } from "react";
import Button from "./components/Button";
import { Container } from "./components/Container";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import Input from "./components/Input";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import LogedIn from "./components/state/LogedIn";
import TableCardHeading from "./components/TableCardHead";

export default function TypeScriptModule() {
  const [name,setName] = useState("");
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

  console.log("name",name);
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
              <div>
                <Input 
                  type="text"
                  value={name}
                  placeholder="Your Name..."
                  handleChange={e=>{
                    setName(e.target.value);
                  }}
                />
                <Button 
                  handleClick={(e,id)=>{
                    console.log("Button Clicked",e,id);
                  }}
                  title={"Click"}
                />
              </div>
              <Container 
                styles={{border: "1px solid black", padding: "1rem"}}
              />
              <LogedIn />
            </div>
          </div>
          <div className="table-card-pagination"></div>
        </div>
      </div>
    </>
  );
}
