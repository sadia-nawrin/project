
import { useUser } from "@clerk/clerk-expo";
import { Stack, Redirect } from "expo-router";

export default function RootLayout() {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
