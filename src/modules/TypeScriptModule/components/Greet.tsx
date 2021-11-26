type GreetProps = {
  name: string; // string
  fontSize?: number; // number
  isLoggedIn: boolean; // boolean
};

export const Greet = (props: GreetProps) => {
    const {fontSize = 0} = props;
  return (
    <>
      <div className="bg-success px-4 mb-2">
        {props?.isLoggedIn ? (
          <h2 className="text-18 font-roboto font-bold tracking-ls02 leading-28 text-white">
            This {props?.name} is {fontSize}
          </h2>
        ) : (
          <h2 className="text-18 font-roboto font-bold tracking-ls02 leading-28 text-white">
            {" "}
            Welcome Guest!{" "}
          </h2>
        )}
      </div>
    </>
  );
};
