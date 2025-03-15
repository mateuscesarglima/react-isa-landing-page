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
        <NavItem>Testimonials</NavItem>
        <NavItem>Contate-me</NavItem>
        <li className="bg-primary hover:text-primary hover:border-primary cursor-pointer rounded-sm border-1 border-transparent p-2 font-light text-white transition duration-200 ease-in-out hover:border-1 hover:bg-transparent">
          Download CV
        </li>
      </ul>
    </nav>
  );
}
