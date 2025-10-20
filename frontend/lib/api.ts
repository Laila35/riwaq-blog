const API_URL = process.env.API_URL || 'http://localhost:5000/api';

export const api = {
  async get(url: string) {
    try {
      const response = await fetch(`${API_URL}${url}`);
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      return { success: false, error: 'Failed to fetch data' };
    }
  }
};