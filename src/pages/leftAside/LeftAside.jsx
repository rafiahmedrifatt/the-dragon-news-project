import React, { Suspense } from "react";
import Category from "../../components/category/Category";

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <Category />
      </Suspense>
    </div>
  );
};

export default LeftAside;
