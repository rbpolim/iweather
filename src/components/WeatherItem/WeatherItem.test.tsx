import { render } from '@testing-library/react-native'

import { WeatherItem } from '@components/WeatherItem'

import clearDay from '@assets/clear_day.svg'

describe('Component: WeatherItem', () => {
  it('should be render correctly', () => {
    const data = {
      icon: clearDay,
      title: 'Simple title',
      value: 'Simple value',
    }

    const { getByText } = render(
      <WeatherItem icon={data.icon} title={data.title} value={data.value} />
    )

    expect(getByText('Simple title')).toBeTruthy()
    expect(getByText('Simple value')).toBeTruthy()
  })
})
