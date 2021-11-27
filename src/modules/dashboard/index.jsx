import { shallowEqual, useSelector } from "react-redux";

export default function Dashboard() {
  const { appName } = useSelector((state) => state?.localStorage, shallowEqual);
  return (
    <>
      <div className="table-card">
        <div className="table-card-heading">
          <h2 className="title">{appName}</h2>
        </div>
      </div>
    </>
  );
}
