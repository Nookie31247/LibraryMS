
const BASE_URL = typeof window === 'undefined'
  ? process.env.API_URL || 'http://localhost:8080'  // 서버: 백엔드 직접
  : '';                                         // 클라이언트: rewrites 통해서

export const apiUrl = (path: string) => `${BASE_URL}/api${path}`;