import Button from "../Button";
import NavItem from "../NavItem";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-14">
      <h1 className="font-inter cursor-pointer text-4xl font-bold">
        <span className="bg-orange-500 px-1 text-white">I</span>sa
      </h1>
      <ul className="flex items-center gap-5 font-light">
        <NavItem>Sobre</NavItem>
        <NavItem>Serviços</NavItem>
        <NavItem>Testemunhos</NavItem>
        <NavItem>Contate-me</NavItem>
        <Button>Download CV</Button>
      </ul>
    </nav>
  );
}
