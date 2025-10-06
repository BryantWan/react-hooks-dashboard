/**
 * Mock API utilities for widgets that need to fetch data
 * Use these in development when real APIs are not available
 */

// Simulate network delay
const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Mock Weather API
 */
export const mockWeatherApi = {
  async getCurrentWeather(city = 'San Francisco') {
    await delay();
    const temps = [15, 18, 22, 25, 28, 20];
    const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy'];

    return {
      city,
      temperature: temps[Math.floor(Math.random() * temps.length)],
      condition: conditions[Math.floor(Math.random() * conditions.length)],
      humidity: Math.floor(Math.random() * 40) + 40,
      windSpeed: Math.floor(Math.random() * 20) + 5,
    };
  },
};

/**
 * Mock Random User API
 */
export const mockUserApi = {
  async getRandomUser() {
    await delay();
    const firstNames = ['Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'Ethan', 'Sophia', 'Mason'];
    const lastNames = ['Smith', 'Johnson', 'Brown', 'Davis', 'Wilson', 'Moore', 'Taylor'];

    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

    return {
      id: Math.random().toString(36).substr(2, 9),
      firstName,
      lastName,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
      avatar: `https://ui-avatars.com/api/?name=${firstName}+${lastName}&background=random`,
      age: Math.floor(Math.random() * 50) + 20,
      city: 'Sample City',
    };
  },
};

/**
 * Mock Search API
 */
export const mockSearchApi = {
  async search(query) {
    await delay(300);

    if (!query) return [];

    const items = [
      'Apple', 'Banana', 'Cherry', 'Date', 'Elderberry', 'Fig', 'Grape',
      'Honeydew', 'Kiwi', 'Lemon', 'Mango', 'Nectarine', 'Orange', 'Papaya',
    ];

    return items
      .filter(item => item.toLowerCase().includes(query.toLowerCase()))
      .map(item => ({ id: item, name: item }));
  },
};

/**
 * Mock Data API for tables
 */
export const mockDataApi = {
  async getData(page = 1, perPage = 10) {
    await delay();

    const allData = Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      name: `Item ${i + 1}`,
      status: ['Active', 'Inactive', 'Pending'][i % 3],
      value: Math.floor(Math.random() * 1000),
      date: new Date(Date.now() - Math.random() * 10000000000).toISOString().split('T')[0],
    }));

    const start = (page - 1) * perPage;
    const end = start + perPage;

    return {
      data: allData.slice(start, end),
      total: allData.length,
      page,
      perPage,
    };
  },
};

/**
 * Mock Chart Data API
 */
export const mockChartApi = {
  async getChartData() {
    await delay();

    return {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: 'Sales',
          data: [12, 19, 3, 5, 2, 3].map(v => v * Math.random() * 100),
        },
      ],
    };
  },
};
