import { useCity } from '@hooks/useCity'
import { act, renderHook, waitFor } from '@testing-library/react-native'

import { CityProvider } from '@contexts/CityContext'

describe('Context: CityContext', () => {
  it('should be change selected city', async () => {
    const { result } = renderHook(() => useCity(), {
      wrapper: CityProvider,
    })

    await waitFor(() => {
      act(() => {
        result.current.handleChanceCity({
          id: '1',
          name: 'City name',
          latitude: -23.547501,
          longitude: -46.636108,
        })
      })
    })

    expect(result.current.city?.name).toBe('City name')
  })
})
