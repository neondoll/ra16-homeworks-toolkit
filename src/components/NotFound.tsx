import type { PropsWithChildren } from "react";

export default function NotFound({ children }: PropsWithChildren) {
  return <div className="p-5 text-xl text-center text-white">{children}</div>;
}
