import { mockWeatherAPIResponse } from '@__tests__/mocks/api/mockWeatherAPIResponse'
import { api } from './api'
import { getWeatherByCityService } from './getWeatherByCityService'

describe('Services: getWeatherByCityService', () => {
  it('should returns the weather data API', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({
      data: mockWeatherAPIResponse,
    })

    const response = await getWeatherByCityService({
      latitude: 123,
      longitude: 321,
    })

    expect(response).toHaveProperty('today')
  })
})
