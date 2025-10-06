import { render } from '@testing-library/react';

/**
 * Custom render function that wraps components with common providers
 * Add any global providers here (theme, router, etc.)
 */
export function renderWithProviders(ui, options = {}) {
  return render(ui, { ...options });
}

/**
 * Helper to wait for async state updates
 */
export const waitForState = (callback, timeout = 1000) => {
  return new Promise((resolve, reject) => {
    const interval = setInterval(() => {
      try {
        const result = callback();
        if (result) {
          clearInterval(interval);
          resolve(result);
        }
      } catch (error) {
        clearInterval(interval);
        reject(error);
      }
    }, 50);

    setTimeout(() => {
      clearInterval(interval);
      reject(new Error('Timeout waiting for state'));
    }, timeout);
  });
};

// Re-export everything from @testing-library/react
export * from '@testing-library/react';
