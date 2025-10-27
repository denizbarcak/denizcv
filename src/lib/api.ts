// API Client for DenizCV Backend

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Types
export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  token: string;
  user: {
    username: string;
    name: string;
  };
}

export interface ApiError {
  success: false;
  message: string;
}

// Helper function to get auth token from localStorage
export const getAuthToken = (): string | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('auth_token');
};

// Helper function to set auth token in localStorage
export const setAuthToken = (token: string): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('auth_token', token);
  }
};

// Helper function to remove auth token from localStorage
export const removeAuthToken = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('auth_token');
  }
};

// API Functions

/**
 * Login to admin panel
 */
export const loginAdmin = async (
  username: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const response = await fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Login failed');
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('An unexpected error occurred');
  }
};

/**
 * Verify access code for PlanVia
 */
export const verifyAccessCode = async (
  username: string,
  code: string
): Promise<{ valid: boolean; redirectUrl?: string; message?: string; username?: string; expiresAt?: string }> => {
  try {
    const response = await fetch(`${API_URL}/api/auth/verify-code`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: username, code }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return {
      valid: false,
      message: 'Failed to verify code',
    };
  }
};

// Protected API calls (require JWT token)

/**
 * Get all access codes (admin only)
 */
export const getAllCodes = async (): Promise<any> => {
  const token = getAuthToken();
  if (!token) throw new Error('No authentication token found');

  try {
    const response = await fetch(`${API_URL}/api/codes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch codes');
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('An unexpected error occurred');
  }
};

/**
 * Create new access code (admin only)
 */
export const createCode = async (codeData: {
  name: string;
  code: string;
  duration: string;
}): Promise<any> => {
  const token = getAuthToken();
  if (!token) throw new Error('No authentication token found');

  try {
    const response = await fetch(`${API_URL}/api/codes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(codeData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to create code');
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('An unexpected error occurred');
  }
};

/**
 * Delete access code (admin only)
 */
export const deleteCode = async (codeId: string): Promise<any> => {
  const token = getAuthToken();
  if (!token) throw new Error('No authentication token found');

  try {
    const response = await fetch(`${API_URL}/api/codes/${codeId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to delete code');
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('An unexpected error occurred');
  }
};

/**
 * Generate random access code (admin only)
 */
export const generateCode = async (): Promise<{ success: boolean; code: string }> => {
  const token = getAuthToken();
  if (!token) throw new Error('No authentication token found');

  try {
    const response = await fetch(`${API_URL}/api/codes/generate`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to generate code');
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('An unexpected error occurred');
  }
};
