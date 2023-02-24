import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addCartItems, getCartItems } from '../features/cartSlice';

export default function useAddCart() {
  const dispatch = useDispatch();
  return useCallback(async (snq: string) => {
    // @ts-ignore
    await dispatch(addCartItems(snq));
  }, []);
}
