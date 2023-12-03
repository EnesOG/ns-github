import Button from "../Button/Button";
import TimesSvg from "../Icons/TimesSvg";

export interface RepositoriesErrorProps {
  onRetry: () => void;
}

const RepositoriesError = ({ onRetry }: RepositoriesErrorProps) => {
  return (
    <div>
      <TimesSvg className="w-96 h-auto fill-error" />
      <p className="font-bold text-error text-3xl mb-4">
        Oeps, Er is helaas iets fouts gegaan in je verzoek...
      </p>
      <Button onClick={onRetry}>Probeer het opnieuw</Button>
    </div>
  );
};

export default RepositoriesError;
