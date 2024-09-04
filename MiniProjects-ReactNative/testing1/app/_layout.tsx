import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }} // This hides the header for the 'index' screen only
      />
      <Stack.Screen
        name="testing"
        options={{ headerShown: false }} // This hides the header for the 'index' screen only
      />
    </Stack>
  );
}
