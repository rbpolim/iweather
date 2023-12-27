import { saveStorageCity } from '@libs/asyncStorage/cityStorage'

import { act, render, screen, waitFor } from '@__tests__/utils/custom-render'
import { mockWeatherAPIResponse } from '@__tests__/mocks/api/mockWeatherAPIResponse'

import { api } from '@services/api'
import { Routes } from '@routes/index'

describe('Routes: AppRoutes', () => {
  it('should be render Search screen when not city selected', async () => {
    const { findByText } = render(<Routes />)
    const title = await waitFor(() => findByText(/escolha um local/i))
    expect(title).toBeTruthy()
  })

  it('should be render Dashboard screen when has city selected', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({
      data: mockWeatherAPIResponse,
    })

    const city = {
      id: '1',
      name: 'City name',
      latitude: -23.547501,
      longitude: -46.636108,
    }

    await saveStorageCity(city)

    await act(() => waitFor(() => render(<Routes />)))

    const title = screen.getByText(city.name)

    expect(title).toBeTruthy()
  })
})
