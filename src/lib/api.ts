export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const fetchData = async (endpoint: string, options = {}) => {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, options);

    if (!res.ok) {
      throw new Error(`API 요청 실패 (HTTP ${res.status})`);
    }

    return await res.json();
  } catch (error) {
    console.error("API Error:", error);
    throw new Error(error.message || "API 요청 중 오류 발생");
  }
};