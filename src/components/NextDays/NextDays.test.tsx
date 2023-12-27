import { render } from '@testing-library/react-native'

import { NextDays } from '@components/NextDays'
import clearDay from '@assets/clear_day.svg'

describe('Component: NextDays', () => {
  it('should be render', () => {
    const data = [
      {
        day: '18/07',
        min: '18',
        max: '23',
        icon: clearDay,
        weather: 'Ensolarado',
      },
      {
        day: '19/07',
        min: '15',
        max: '20',
        icon: clearDay,
        weather: 'Ensolarado',
      },
      {
        day: '20/07',
        min: '19',
        max: '22',
        icon: clearDay,
        weather: 'Nublado',
      },
      {
        day: '21/07',
        min: '12',
        max: '23',
        icon: clearDay,
        weather: 'Chuva fraca',
      },
    ]

    const { getByText } = render(<NextDays data={data} />)
    expect(getByText('18/07')).toBeTruthy()
  })
})
