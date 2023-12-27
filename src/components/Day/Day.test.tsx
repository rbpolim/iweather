import { render } from '@testing-library/react-native'

import { Day } from '@components/Day'
import clearDay from '@assets/clear_day.svg'

describe('Component: Day', () => {
  it('renders Day component', () => {
    const data = {
      day: '18/07',
      min: '15',
      max: '20',
      icon: clearDay,
      weather: 'Ensolarado',
    }

    const { getByText } = render(<Day data={data} />)

    expect(getByText('18/07')).toBeTruthy()
  })
})
