import Slogan from './src/pages/Slogan'
import { useFonts, EBGaramond_400Regular, EBGaramond_700Bold } from '@expo-google-fonts/eb-garamond'
// import * as SplashScreen from 'expo-splash-screen'

// SplashScreen.preventAutoHideAsync()

export default function App() {
  const [ fontsLoaded ] = useFonts({
    EBGaramond_400Regular, 
    EBGaramond_700Bold
  })

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded || fontError) {
  //     await SplashScreen.hideAsync()
  //   }
  // }, [fontsLoaded, fontError])

  if (!fontsLoaded) {
    return null
  }

  return (
    <Slogan/>
  )
}