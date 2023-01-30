import React from "react";
import { useRouteError } from "react-router-dom";

function DisplayError() {
  const error = useRouteError();
  return (
    <div>
      <p className="text-red-500">DisplayError</p>
      <p className="text-red-500">{error.statusText || error.message}</p>
      <p className="text-red-500 text-4xl">Please Sign out and Log back in</p>
    </div>
  );
}

export default DisplayError;
