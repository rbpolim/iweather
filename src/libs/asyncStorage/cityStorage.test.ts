import {
  getStorageCity,
  removeStorageCity,
  saveStorageCity,
} from './cityStorage'

const city = {
  id: '1',
  name: 'City 1',
  latitude: 123,
  longitude: 321,
}

describe('Storage: CityStorage', () => {
  it("should be return null when don't have a city storage", async () => {
    const response = await getStorageCity()
    expect(response).toBeNull()
  })

  it('should be return a city storage', async () => {
    await saveStorageCity(city)

    const response = await getStorageCity()

    expect(response).toEqual(city)
  })

  it('should be remove a city storage', async () => {
    await saveStorageCity(city)

    await removeStorageCity()

    const response = await getStorageCity()

    expect(response).toBeNull()
  })
})
