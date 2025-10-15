import { useFocusEffect, useRouter } from "expo-router";
import { BackHandler } from "react-native";
import { useCallback } from "react";

export function useBackToCookie() {
  const router = useRouter();

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        router.replace("/(tabs)/Cookie");
        return true;
      };

      const subscription = BackHandler.addEventListener(
        "hardwareBackPress",
        onBackPress
      );

      return () => subscription.remove();
    }, [router])
  );
}
