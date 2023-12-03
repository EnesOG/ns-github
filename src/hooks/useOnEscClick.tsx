import useEventListener from "./useEventListener";

const useOnEscClick = (handler: Function) => {
  useEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      handler();
    }
  });
};

export default useOnEscClick;
