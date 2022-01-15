/// <reference types="react-scripts" />
interface Window {
  Kakao: any;
  gapi: any;
  naver: any;
}

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    PUBLIC_URL: string;
    REACT_APP_API_URL: string;
    REACT_APP_KAKAO_JAVASCRIPT: string;
    REACT_APP_GOOGLE_APIKEY: string;
    REACT_APP_GOOGLE_CLIENT: string;
    REACT_APP_NAVER_CLIENT: string;
    REACT_APP_NAVER_CLIENT_SECRET: string;
    REACT_APP_NAVER_REDIRECT: string;
  }
}
