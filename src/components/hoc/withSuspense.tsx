import React from "react";
import Preloader from "../common/Preloader";

export const withSuspense = (Component: any) => (props: any) =>
  (
    <React.Suspense fallback={<Preloader />}>
      <Component {...props} />
    </React.Suspense>
  );
