type HeadingProps = {
  children: string;
};

export const Heading = (props: HeadingProps) => {
  return <h2 className="title font-roboto">{props?.children}</h2>;
};
