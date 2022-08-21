import { Link, Outlet } from "@remix-run/react";

export default function IncallSection() {
  return (
    <>
      <div className="btnTest">
        <Link to="/">Home</Link>
      </div>
      <h1>This Incall Section</h1>
    </>
  );
}
