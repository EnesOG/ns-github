import SearchHistory from "../SearchHistory/SearchHistory";
import useHistory from "./useHistory";

const History = () => {
  const { searches } = useHistory();
  return (
    <>
      {searches.map((search, index) => (
        <SearchHistory key={index} search={search} />
      ))}
    </>
  );
};

export default History;
