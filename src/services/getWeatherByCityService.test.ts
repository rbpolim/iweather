import { api } from './api'
import { mockWeatherAPIResponse } from './mocks'
import { getWeatherByCityService } from './getWeatherByCityService'

describe('Service: getWeatherByCityService', () => {
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
