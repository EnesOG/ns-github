import { Handler } from "@/shared/types";
import { RefObject } from "react";
import useEventListener from "./useEventListener";

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  mouseEvent: "mousedown" | "mouseup" = "mousedown"
): void {
  useEventListener(mouseEvent, (event) => {
    const el = ref?.current;
    if (!el || el.contains(event.target as Node)) {
      return;
    }
    handler(event);
  });
}
