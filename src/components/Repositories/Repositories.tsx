import { RepositoriesType } from "@/shared/types";
import Repository from "../Repository/Repository";
import RepositoriesEmpty from "./RepositoriesEmpty";
import RepositoriesInfo from "./RepositoriesInfo";

export interface RepositoriesProps {
  data?: RepositoriesType;
  resultCount?: number;
}

const Repositories = ({ resultCount = 0, data = [] }: RepositoriesProps) =>
  data.length === 0 ? (
    <RepositoriesEmpty />
  ) : (
    <>
      <RepositoriesInfo count={resultCount} />
      {data.map((repo) => (
        <div className="mt-4" key={repo.id}>
          <Repository {...repo} />
        </div>
      ))}
    </>
  );

export default Repositories;
