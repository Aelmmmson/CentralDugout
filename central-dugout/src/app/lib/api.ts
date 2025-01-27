export const fetchFromBackend = async (endpoint: string, options?: RequestInit) => {
    const response = await fetch(`http://localhost:5000${endpoint}`, options);
    return response.json();
  };