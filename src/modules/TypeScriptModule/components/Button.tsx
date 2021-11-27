import React from "react";

type ButtonProps = {
  title: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export default function Button(props: ButtonProps) {
  return (
    <button
      className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none"
      onClick={(event) => props?.handleClick(event, 1)}
    >
      {props?.title}
    </button>
  );
}
