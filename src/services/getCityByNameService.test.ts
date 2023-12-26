import { mockCityAPIResponse } from '@__tests__/mocks/api/mockCityAPIResponse'
import { api } from './api'
import { getCityByNameService } from './getCityByNameService'

describe('Services: getCityByName', () => {
  it('should returns the details of city when provided with its name', async () => {
    jest.spyOn(api, 'get').mockResolvedValue({
      data: mockCityAPIResponse,
    })

    const response = await getCityByNameService('City 1')

    expect(response.length).toBeGreaterThan(0)
  })
})
