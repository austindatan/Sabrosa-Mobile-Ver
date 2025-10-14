import { useEffect, useRef, useState } from "react";

if (!global.tabVisibility) {
  const listeners = new Set();
  global.tabVisibility = {
    on: (event, callback) => listeners.add(callback),
    off: (event, callback) => listeners.delete(callback),
    emit: (event, data) => listeners.forEach((cb) => cb(data)),
  };
}

export default function useHideOnScroll() {
  const lastScrollY = useRef(0);
  const [visible, setVisible] = useState(true);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    global.tabVisibility.emit("change", visible);
  }, [visible]);

  const handleScroll = (event) => {
    const currentY = event.nativeEvent.contentOffset.y;
    const diff = currentY - lastScrollY.current;

    if (Math.abs(diff) < 15) return;
    clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      if (diff > 0) {
        setVisible(false);
      } else if (diff < 0) {
        setVisible(true);
      }
    }, 10);

    lastScrollY.current = currentY;
  };

  useEffect(() => {
    return () => clearTimeout(scrollTimeout.current);
  }, []);

  return { visible, handleScroll };
}
