//@ts-nocheck
import React, { useState, useEffect } from "react";
import { TouchableOpacity, Image, StyleSheet, ImageSourcePropType, ViewStyle } from "react-native";
import { MotiView } from "moti";
import { LinearGradient } from 'expo-linear-gradient';

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
      from={{ backgroundColor: "#ddddddff" }}
      animate={{ backgroundColor: "#e7edf1ff" }}
      transition={{
        type: "timing",
        duration: 800,
        loop: true,
        repeatReverse: true,
      }}
      style={[
        {
          width,
          height,
          borderRadius,
        },
        style,
      ]}
    />
  );
};

type BrandCardProps = {
  image: ImageSourcePropType;
  colors: string[];
  size?: number;
  onPress?: () => void;
};

const BrandCard = ({
  image,
  colors = ['#E0E0E0', '#B0B0B0'],
  size = 155,
  onPress,
}: BrandCardProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <SkeletonLoader
        width={size}
        height={size}
        borderRadius={16}
      />
    );
  }

  return (
    <TouchableOpacity
      style={[
        styles.card,
        { width: size, height: size } as ViewStyle,
      ]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <LinearGradient
        colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientBackground}
      >
        <Image source={image} style={styles.logo} resizeMode="contain" />
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    overflow: 'hidden',
  },
  logo: {
    width: "70%",
    height: "70%",
  },
  gradientBackground: {
    flex: 1,
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
  }
});

export default BrandCard;