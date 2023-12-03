import { Link } from "react-router-dom";

const NavItems = () => {
  return (
    <div className="font-bold">
      <Link to={"/history"}>Jouw geschiedenis</Link>
    </div>
  );
};

export default NavItems;
