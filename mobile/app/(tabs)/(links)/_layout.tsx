import { Stack } from "expo-router";

export default function LinksLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    />
  );
}
