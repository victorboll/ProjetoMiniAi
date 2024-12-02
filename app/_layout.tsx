import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts, Amiko_400Regular, Amiko_700Bold
 } from '@expo-google-fonts/amiko';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import AppLoading from 'expo-app-loading';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    Amiko_400Regular,
    Amiko_700Bold,
    'ADLaM Display': require('@/assets/fonts/ADLaMDisplay.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
   <AppLoading/>
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        {/*<Stack.Screen name="+not-found" />*/}
        <Stack.Screen name="index" options={{ headerShown: false }} /> 
        <Stack.Screen name="screens/secondPage" options={{ title: '' }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
