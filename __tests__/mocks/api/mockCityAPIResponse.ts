import { CityAPIResponse } from '@services/getCityByNameService'

export const mockCityAPIResponse: CityAPIResponse = {
  id: '1',
  name: 'City 1',
  sys: {
    country: 'Brazil',
  },
  coord: {
    lon: 123,
    lat: 321,
  },
}
