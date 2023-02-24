export const setCookie = (key: string, value: string, exp: number) => {
  document.cookie = `${key}=${value} ;max-age=1800; path=/`;
};

export const getCookie = (key: string) => {
  const value = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
  return value ? value[2] : null;
};

export const deleteCookie = (key: string) => {
  document.cookie = `${key}=;max-age=0`;
  console.log('complete');
};
