import { RefObject, useEffect } from "react";

export const useOutsideClick = <T extends HTMLElement>(target: RefObject<T>, callback: () => void) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (!target.current || target.current.contains(event.target as Node)) {
        return;
      }
      callback();
    };

    window.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [callback, target]);
};
