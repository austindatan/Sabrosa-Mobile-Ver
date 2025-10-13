import React from "react";
import { TouchableOpacity, Image, StyleSheet, ImageSourcePropType, ViewStyle } from "react-native";

type BrandCardProps = {
  image: ImageSourcePropType;
  color: string;
  size?: number;
  onPress?: () => void;
};

const BrandCard = ({ image, color, size = 155, onPress }: BrandCardProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.card,
        { backgroundColor: color, width: size, height: size } as ViewStyle,
      ]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Image source={image} style={styles.logo} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "70%",
    height: "70%",
  },
});

export default BrandCard;
