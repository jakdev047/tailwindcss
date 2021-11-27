const LandingTable = (props) => {
  return (
    <table
      className={
        props.classess
          ? `table-auto w-full ${props.classess}`
          : "table-auto w-full"
      }
    >
      {props.children}
    </table>
  );
};

export default LandingTable;
