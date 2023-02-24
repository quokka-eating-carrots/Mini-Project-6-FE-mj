import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addCartList, deleteCart, getCartList } from '../api/axios';

// 장바구니 아이템 정보
export interface CartInfo {
  snq: number;
  loanName: string;
  loanDescription: string;
  loanTarget: string[];
  baseRate: string;
  rate: string;
}

export const deleteCartItems = createAsyncThunk<
  {
    ok: boolean;
    snq: number;
  },
  number
>('DELETE-CART', async (snq: number) => {
  const res = await deleteCart(snq);
  return {
    ok: res.ok,
    snq,
  };
});

// 장바구니 조회
export const getCartItems = createAsyncThunk<CartInfo[]>(
  'GET_CARTLIST',
  async () => {
    const res = await getCartList();
    return res.cartData;
  },
);

// 장바구니 조회
export const addCartItems = createAsyncThunk<boolean, string>(
  'ADD_CART',
  async (snq: string) => {
    return (await addCartList(snq)).cartData;
  },
);

const cart = createSlice({
  name: 'cart',
  // init 객체로 시작해보
  initialState: <CartInfo[]>[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCartItems.fulfilled, (state, { payload }) => {
      return payload;
    });
    builder.addCase(deleteCartItems.fulfilled, (state, { payload }) => {
      return state.filter((item: CartInfo) => item.snq !== payload.snq);
    });
    builder.addCase(addCartItems.fulfilled, (state, { payload }) => {
      if (payload) {
        getCartItems();
      }
    });
  },
});

export default cart;
