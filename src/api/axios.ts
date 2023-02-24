import { AxiosError } from 'axios';
import { request } from './core/api';

// 인증
interface AuthFn {
  name?: string;
  password?: string;
  email?: string;
  phone?: string;
  token?: string;
}

export interface ResponseValue {
  ok: boolean;
  signData?: AuthFn;
}

// 관심 상품
export type FavorType = {
  snq: string;
  baseRate: string;
  loanDescription: string;
  loanName: string;
  loanTarget: string;
  rate: string;
  loanLimit: string;
  provider: string;
};

// 장바구니 아이템 정보
export type CartType = {
  snq: number;
  loanName: string;
  loanDescription: string;
  loanTarget: string[];
  baseRate: string;
  rate: string;
};

// 회원 정보
export interface UserInfoType {
  userId: string;
  name: string;
  phone: string;
}

// 회원 추가 정보
export interface UserDetailInfoType {
  age: string;
  bank: string;
  crdtGrade: string;
  address: string;
  income: string;
  job: string;
}
// 상품리스트 정보
export interface getProductType {
  snq: string;
  loanName: string;
  loanDescription: string;
  loanTarget: string;
  baseRate: string;
  rate: string;
}
export interface ProductList {
  content: getProductType[];
  productData: getProductType[];
}

export interface ProductData {
  recommend: ProductList;
  recommendData: ProductList;
}

export interface CategoryData {
  page: number;
  baseRate: string;
  loanDescription: string;
  loanName: string;
  loanTarget: string[];
  rate: string;
  snq: number;
}

// 회원가입
export const signUp = async (
  name: string,
  password: string,
  email: string,
  phone: string,
) => {
  try {
    const res = await request('/signup', {
      method: 'post',
      data: {
        name,
        password,
        email,
        phone,
      },
    });
    return {
      ok: true,
      signData: res.data,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        ok: false,
        signData: error?.response?.data,
      };
    }
    return {
      ok: false,
    };
  }
};

// 로그인
export const signIn = async (email: string, password: string) => {
  try {
    const res = await request('/login', {
      method: 'post',
      data: {
        email,
        password,
      },
    });
    return {
      ok: true,
      signData: res.data,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
    return {
      ok: false,
    };
  }
};

// 로그아웃
export const logOut = async () => {
  try {
    const res = await request('/logout', {
      method: 'POST',
    });
    return {
      ok: true,
      checkData: res.data,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
    return {
      ok: false,
    };
  }
};

// 회원 추가 정보 입력
export const changeUserDetailInfo = async (
  age: string,
  address: string,
  job: string,
  bank: string,
  crdtGrade: string,
  income: string,
) => {
  try {
    const res = await request('/mypage/member/detail', {
      method: 'PUT',
      data: {
        age,
        address,
        job,
        bank,
        crdtGrade,
        income,
      },
    });
    return {
      ok: true,
      userDetailInfoData: res.data,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
    return {
      ok: false,
    };
  }
};

// 회원 확인
export const checkUser = async (password: string) => {
  try {
    const res = await request('/mypage/check', {
      method: 'POST',
      data: {
        password,
      },
    });
    return {
      ok: true,
      checkData: res.data,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
    return {
      ok: false,
    };
  }
};

// 회원 정보 조회
export const getUserInfo = async () => {
  try {
    const res = await request('/mypage/info', {
      method: 'GET',
    });
    return {
      ok: true,
      userInfoData: res.data,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
    return {
      ok: false,
    };
  }
};

// 회원 추가 정보 조회
export const getUserDetailInfo = async () => {
  try {
    const res = await request('/mypage/detail/info', {
      method: 'GET',
    });
    return {
      ok: true,
      userDetailInfoData: res.data,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
    return {
      ok: false,
    };
  }
};

// 회원 정보 수정
export const changeUserInfo = async (phone: string, password: string) => {
  try {
    const res = await request('/mypage/member', {
      method: 'PUT',
      data: {
        phone,
        password,
      },
    });
    return {
      ok: true,
      changeUserInfoData: res.data,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
    return {
      ok: false,
    };
  }
};

// 관심 상품 조회
export const getFavor = async () => {
  const res = await request('/mypage/favor', {
    method: 'GET',
  });
  return {
    ok: true,
    favorData: res.data,
  };
};

// 관심 상품 추가
export const addFavor = async (snq: string | number) => {
  try {
    const res = await request('/favor', {
      method: 'POST',
      data: {
        snq,
      },
    });
    return {
      ok: true,
      favorData: res.data,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
    return {
      ok: false,
    };
  }
};

// 관심 상품 삭제
export const deleteFavor = async (snq: string | number) => {
  const res = await request('/favor', {
    method: 'DELETE',
    data: {
      snq,
    },
  });
  return {
    ok: true,
    favorData: res.data,
  };
};

// 장바구니 추가
export const addCartList = async (snq: string | number) => {
  try {
    const res = await request('/cart', {
      method: 'POST',
      data: {
        snq,
      },
    });
    return {
      ok: true,
      cartData: res.data,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
    return {
      ok: false,
    };
  }
};

// 장바구니 조회
export const getCartList = async () => {
  const res = await request('/mypage/cart', {
    method: 'get',
  });
  return {
    ok: true,
    cartData: res.data,
  };
};

// 장바구니 삭제
export const deleteCart = async (snq: number) => {
  const res = await request('/cart', {
    method: 'DELETE',
    data: {
      snq,
    },
  });
  return {
    ok: true,
    data: res.data,
  };
};
// 상세 정보
export const getProductDetail = async (snq: number | string) => {
  try {
    const res = await request(`/finance/loan/detail?snq=${snq}`, {
      method: 'GET',
    });
    return {
      ok: true,
      productDetailData: res.data,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
    return {
      ok: false,
    };
  }
};

// 상품 리스트
export const getProduct = async (): Promise<any> => {
  try {
    const res = await request('/finance/loan/', {
      method: 'GET',
    });
    return {
      ok: true,
      productData: res.data,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
    return {
      ok: false,
    };
  }
};

// 로그인 시 추천상품 리스트
export const memberRecommend = async (): Promise<any> => {
  try {
    const res = await request('/finance/member/recommend/loan', {
      method: 'GET',
    });
    return {
      ok: true,
      recommendData: res.data,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
    return {
      ok: false,
    };
  }
};

export const nomemberRecommend = async (): Promise<any> => {
  try {
    const res = await request('/finance/recommend/loan', {
      method: 'GET',
    });
    return {
      ok: true,
      recommend: res.data,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
    return {
      ok: false,
    };
  }
};

// 카테고리별 분류
export const getCategoryList = async (
  category: string,
  keyword: string,
  page: number,
) => {
  try {
    const res = await request(
      `finance/itemlist/${category}?${category}=${keyword}&pageno=${page}`,
      {
        method: 'GET',
      },
    );
    return {
      ok: true,
      categoryData: res.data,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
    return {
      ok: false,
      categoryData: null,
    };
  }
};

// 키워드 검색
export const getKeywordSearch = async (keyword: string, page = 1) => {
  try {
    const res = await request(
      `finance/itemlist/keyword?keyword=${keyword}&pageno=${page}`,
      {
        method: 'GET',
      },
    );
    return {
      ok: true,
      searchData: res.data,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
    return {
      ok: false,
    };
  }
};

// 대출 전체 상품 리스트
export const getAllList = async (page: number) => {
  try {
    const res = await request(`finance/itemlist?pageno=${page}`, {
      method: 'GET',
    });
    return {
      ok: true,
      allData: res.data,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.message);
    }
    return {
      ok: false,
    };
  }
};
