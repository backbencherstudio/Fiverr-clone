import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-358 px-4 2xl:px-0  ">{children}</div>;
}
