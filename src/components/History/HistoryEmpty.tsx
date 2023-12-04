import { Link } from "react-router-dom";
import Button from "../Button/Button";

const HistoryEmpty = () => {
  return (
    <div>
      <h2>Helaas heb je nog niks gezocht</h2>
      <Link to="/">
        <Button>Klik hier om te beginnen met zoeken</Button>
      </Link>
    </div>
  );
};

export default HistoryEmpty;
