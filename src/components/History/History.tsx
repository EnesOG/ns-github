import SearchHistory from "../SearchHistory/SearchHistory";
import HistoryEmpty from "./HistoryEmpty";
import useHistory from "./useHistory";

const History = () => {
  const { searches } = useHistory();
  return (
    <>
      {searches.length === 0 ? (
        <HistoryEmpty />
      ) : (
        searches?.map((search, index) => (
          <SearchHistory key={index} search={search} />
        ))
      )}
    </>
  );
};

export default History;
