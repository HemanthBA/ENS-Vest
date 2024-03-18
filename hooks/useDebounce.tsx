"use client";
import React, { useEffect, useState } from "react";

type Props = {
  callback: (...args: any[]) => void;
  delay: number;
};
const useDebounce = ({ callback, delay }: Props) => {
  const [timer, setTimer] = useState<NodeJS.Timeout>();

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timer]);

  const debounce = (...args: any[]) => {
    if (timer) {
      clearTimeout(timer);
    }

    const newTimer = setTimeout(() => {
      callback(...args);
    }, delay);

    setTimer(newTimer);
  };

  return debounce;
};

export default useDebounce;
