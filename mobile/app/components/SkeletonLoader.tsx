import React from "react";
import { View, StyleSheet } from "react-native";
import { MotiView } from "moti";

type SkeletonLoaderProps = {
  width?: number | string;
  height?: number;
  borderRadius?: number;
  style?: object;
};

const SkeletonLoader = ({
  width = "100%",
  height = 20,
  borderRadius = 8,
  style,
}: SkeletonLoaderProps) => {
  return (
    <MotiView
      from={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "timing",
        duration: 8000,
        loop: true,
      }}
      style={[
        {
          width,
          height,
          borderRadius,
          backgroundColor: "#E1E9EE", // light gray skeleton color
        },
        style,
      ]}
    />
  );
};

export default SkeletonLoader;
