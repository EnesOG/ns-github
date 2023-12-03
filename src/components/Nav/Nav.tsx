import Container from "../Layout/Container";
import NavItems from "./NavItems";
import NavLogo from "./NavLogo";

const Nav = () => {
  return (
    <div className="bg-white shadow-md">
      <Container>
        <div className="py-16 flex gap-12 items-center">
          <NavLogo />
          <NavItems />
        </div>
      </Container>
    </div>
  );
};

export default Nav;
