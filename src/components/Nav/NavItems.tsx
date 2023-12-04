import { Link } from "react-router-dom";

const NavItems = () => {
  return (
    <div className="font-bold">
      <Link aria-label="Link naar jouw geschiedenis" to={"/history"}>
        Jouw geschiedenis
      </Link>
    </div>
  );
};

export default NavItems;
