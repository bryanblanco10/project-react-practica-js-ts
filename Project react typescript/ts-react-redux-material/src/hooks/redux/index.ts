import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook
} from 'react-redux';
import { type Dispatch, type RootState } from '../../redux/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useCustomDispatch: () => Dispatch = useDispatch;
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;
