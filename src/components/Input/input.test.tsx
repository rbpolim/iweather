import { render } from "@testing-library/react-native";

import { Input } from "@components/Input";

describe("Component: Input", () => {
  it("should not render the activity indicator when isLoading is false", () => {
    const { queryByTestId } = render(<Input />);

    expect(queryByTestId(/activity-indicator/i)).toBeNull();
  });

  it("should render the activity indicator when isLoading is true", () => {
    const { getByTestId } = render(<Input isLoading />);

    expect(getByTestId(/activity-indicator/i)).toBeTruthy();
  });
});
