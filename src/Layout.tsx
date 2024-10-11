import Header from "./components/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const className = "w-[90%] max-w-[1000px] mx-auto my-12";

  return (
    <>
      <Header className={className} />
      <main className={className}>
        <Outlet />
      </main>
    </>
  );
};
