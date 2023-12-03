interface SpinnerProps {
  size?: number;
  color?: string;
}

const className =
  "border-b-white border-l-white border-r-white border-r-transparent box-border block absolute rounded-[50%] animate-spin";
const style = (width: number, inner: number): React.CSSProperties => ({
  width: `${inner}px`,
  height: `${inner}px`,
  margin: `${width / 10}px`,
  borderWidth: `${width / 10}px`,
  borderStyle: "solid",
});

const Spinner = ({ size = 25, color = "border-t-tertiary" }: SpinnerProps) => {
  const inner = size * 0.8;
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      className={`inline-block relative`}
    >
      <div
        style={{ ...style(size, inner) }}
        className={`${className} ${color} transition-transform`}
      ></div>
      <div
        style={{ ...style(size, inner) }}
        className={`${className} ${color} transition-transform delay-500`}
      ></div>
      <div
        style={{ ...style(size, inner) }}
        className={`${className} ${color} transition-transform delay-300`}
      ></div>
      <div
        style={{ ...style(size, inner) }}
        className={`${className} ${color} transition-transform delay-150`}
      ></div>
    </div>
  );
};

export default Spinner;
