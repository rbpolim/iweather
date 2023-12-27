import { render } from '@testing-library/react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { CityProvider } from '@contexts/CityContext'

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaProvider>
      <CityProvider>{children}</CityProvider>
    </SafeAreaProvider>
  )
}

function customRender(ui: React.ReactElement, options?: any) {
  return render(ui, { wrapper: Providers, ...options })
}

export * from '@testing-library/react-native'
export { customRender as render }
