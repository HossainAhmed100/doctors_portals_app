import React from "react";
import { Bars } from "react-loader-spinner";

function UserBarLoder() {
  return (
    <div className="flex items-center justify-center h-full">
      <Bars
        height="80"
        width="80"
        color="#6569ec"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default UserBarLoder;
