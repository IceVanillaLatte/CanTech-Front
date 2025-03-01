"use client";

import { useState } from "react";
import { fetchData } from "@/lib/api";

export default function ApiButton() {
  const [response, setResponse] = useState("");

  const callApi = async () => {
    try {
      const data = await fetchData("/back/test"); // API 호출
      setResponse(data.message || JSON.stringify(data));
    } catch (error) {
      setResponse(`API 호출 실패: ${error.message}`);
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={callApi}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        API 호출
      </button>
      {response && <p className="mt-2 text-gray-700">응답: {response}</p>}
    </div>
  );
}