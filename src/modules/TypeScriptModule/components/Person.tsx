import React from "react";

type PersonProps = {
  // object
  name: {
    first: string;
    last: string;
  };
};

export default function Person(props: PersonProps) {
  return (
    <div className="bg-success px-4 mb-2">
      <h2 className="text-18 font-roboto font-bold tracking-ls02 leading-28 text-white">
        {props?.name?.first} {props?.name?.last}
      </h2>
    </div>
  );
}
