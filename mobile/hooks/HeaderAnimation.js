import { useRef } from "react";
import { Animated } from "react-native";

export default function useHomeHeaderAnimation() {
  const scrollY = useRef(new Animated.Value(0)).current;

  const HEADER_MAX = 160;
  const HEADER_MIN = 100;
  const SCROLL_RANGE = HEADER_MAX - HEADER_MIN;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, SCROLL_RANGE],
    outputRange: [HEADER_MAX, HEADER_MIN],
    extrapolate: "clamp",
  });

  const topContentOpacity = scrollY.interpolate({
    inputRange: [0, SCROLL_RANGE / 2, SCROLL_RANGE],
    outputRange: [1, 0.3, 0],
    extrapolate: "clamp",
  });

  const topContentTranslateY = scrollY.interpolate({
    inputRange: [0, SCROLL_RANGE],
    outputRange: [0, -70],
    extrapolate: "clamp",
  });

  const logoScale = scrollY.interpolate({
    inputRange: [0, SCROLL_RANGE],
    outputRange: [1, 0.8],
    extrapolate: "clamp",
  });

  const searchTranslateY = scrollY.interpolate({
    inputRange: [0, SCROLL_RANGE],
    outputRange: [0, -60],
    extrapolate: "clamp",
  });

  return {
    scrollY,
    headerHeight,
    topContentOpacity,
    topContentTranslateY,
    logoScale,
    searchTranslateY,
    HEADER_MAX,
  };
}
