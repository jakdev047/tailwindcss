import React from "react";

type PersonsListProps = {
  // array
  parsons: {
    first: string;
    last: string;
  }[];
};

export default function PersonList(props: PersonsListProps) {
  return (
    <>
      {props?.parsons?.map((item, i) => {
        return (
          <div className="bg-success px-4 mb-2" key={i}>
            <h2 className="text-18 font-roboto font-bold tracking-ls02 leading-28 text-white">
              {item?.first} {item?.last}
            </h2>
          </div>
        );
      })}
    </>
  );
}
