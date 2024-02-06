import { render, screen } from "@testing-library/react";
import App from "../App";
import { renderWithProviders } from "../utils/utils-for-tests";

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // Preserve actual functionality for other parts
  useNavigate: jest.fn(),
  useLocation: jest.fn().mockReturnValue({
    pathname: '/some-path',
    search: '?some=query',
    state: { some: 'state' },
  }),
}));

test("renders learn react link", () => {
  renderWithProviders(<App />);
  screen.logTestingPlaygroundURL();
});
