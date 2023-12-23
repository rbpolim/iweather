import { fireEvent, render } from '@testing-library/react-native'

import { SelectList } from '@components/SelectList'

describe('Component: SelectList', () => {
  it('should be render the city when the user select the name of the city', () => {
    const data = [
      { id: '1', name: 'City 1', latitude: 123, longitude: 123 },
      { id: '2', name: 'City 2', latitude: 321, longitude: 321 },
    ]

    const onPress = jest.fn()

    const { getByText } = render(
      <SelectList data={data} onPress={onPress} onChange={() => {}} />
    )

    const selectedCity = getByText('City 2')
    fireEvent.press(selectedCity)

    expect(onPress).toHaveBeenCalledWith(data[1]) // City 2
  })

  it('should not be render the cities when data is empty', () => {
    const { getByTestId } = render(
      <SelectList data={[]} onPress={() => {}} onChange={() => {}} />
    )

    const selectOptions = getByTestId('select-options')
    expect(selectOptions.children.length).toBe(0) // 0
  })
})
