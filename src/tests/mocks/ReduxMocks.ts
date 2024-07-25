import { useDispatch as useDispatchOriginal, useSelector as useSelectorOriginal } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';

// Создайте моки для dispatch и selector
export const mockDispatch = jest.fn() as jest.MockedFunction<Dispatch<AnyAction>>;

export const mockUseDispatch = () => {
  jest.spyOn(require('react-redux'), 'useDispatch').mockReturnValue(mockDispatch);
};

export const mockUseSelector = <S, T>(state: S, selector: (state: S) => T) => {
  jest.spyOn(require('react-redux'), 'useSelector').mockImplementation(
    (sel: (state: S) => T) => sel(state)
  );
};
