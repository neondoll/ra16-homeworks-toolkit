import Menu from "./Menu";
import { HTMLAttributes } from "react";

type HeaderProps = { className?: HTMLAttributes<HTMLElement>["className"] };

export default function Header({ className }: HeaderProps) {
  return (
    <header className={className}>
      <h1 className="mb-12 text-4xl text-center text-white">Поиск фильмов по каталогу IMDb</h1>
      <Menu />
    </header>
  );
}
