import { Link } from "react-router-dom";
import Logo, { LogoProps } from "../Layout/Logo";

const NavLogo = (props: LogoProps) => {
  return (
    <Link aria-label="Link naar de home-pagina" to={"/"}>
      <Logo {...props} className="max-w-logo h-auto" />
    </Link>
  );
};

export default NavLogo;
