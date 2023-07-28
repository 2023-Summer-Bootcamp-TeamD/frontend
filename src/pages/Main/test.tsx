import React, { ReactNode } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Main from './index';
import { describe } from 'node:test';
import { MemoryRouter, useNavigate } from 'react-router-dom';

describe('<Main />', () => {
  it('render Main Page', () => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>,
    );
  });
});

type buttonType = {
  route: string;
  buttonName: string;
};
const Button = ({ route, buttonName }: buttonType) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(route);
  };

  return <button onClick={onClick}>{buttonName}</button>;
};

const renderWithRouter = (children: ReactNode) => {
  return {
    ...render(<MemoryRouter>{children}</MemoryRouter>),
  };
};

const mockedNavigator = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigator,
}));

describe('Buttons', () => {
  beforeEach(() => {
    mockedNavigator.mockClear();
  });

  it('renders Creating Button', () => {
    const { getByText } = renderWithRouter(
      <Button route={'/creatingSpecificRooms'} buttonName={'방 만들기'} />,
    );
    const button = getByText('방 만들기');

    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(mockedNavigator).toBeCalledTimes(1);
  });
});

describe('Buttons', () => {
  beforeEach(() => {
    mockedNavigator.mockClear();
  });

  it('renders Entry Button', () => {
    const { getByText } = renderWithRouter(
      <Button route={'/entryRoom'} buttonName={'입장하기'} />,
    );
    const button = getByText('입장하기');

    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(mockedNavigator).toBeCalledTimes(1);
  });
});
