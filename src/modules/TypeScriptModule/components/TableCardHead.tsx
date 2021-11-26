type TableCardHeadProps = {
  children: React.ReactNode;
};

export default function TableCardHeading(props:TableCardHeadProps) {
  return <div className="table-card-heading">{props?.children}</div>;
}
