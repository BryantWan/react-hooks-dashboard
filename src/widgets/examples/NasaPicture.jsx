import { useState, useEffect } from 'react';

/**
 * NASA Picture of the Day Widget - EXAMPLE WIDGET
 *
 * This is a complete example widget to demonstrate:
 * - Fetching data from NASA's APOD API
 * - Handling different media types (images vs videos)
 * - Date selection with useEffect dependencies
 * - Loading and error states
 * - Responsive image display
 *
 * Students can enable this widget to see a working implementation!
 *
 * Note: NASA API demo key has rate limits. For production, get your own key at https://api.nasa.gov
 */
function NasaPicture() {
  const [apod, setApod] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(() => {
    // Default to today
    return new Date().toISOString().split('T')[0];
  });

  const fetchAPOD = async (date) => {
    setIsLoading(true);
    setError(null);

    try {
      // Using NASA's DEMO_KEY - rate limited to 30 requests per hour per IP
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch NASA picture');
      }

      const data = await response.json();
      setApod(data);
    } catch (err) {
      setError('Failed to load NASA picture. API rate limit may be reached.');
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch APOD when selected date changes
  useEffect(() => {
    fetchAPOD(selectedDate);
  }, [selectedDate]);

  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
  };

  // Get max date (today)
  const maxDate = new Date().toISOString().split('T')[0];

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="text-red-500 mb-4">❌ {error}</div>
        <button
          onClick={() => fetchAPOD(selectedDate)}
          className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Date Selector */}
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium text-gray-700">Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          max={maxDate}
          min="1995-06-16" // APOD started on this date
          className="border border-gray-300 rounded px-3 py-1 text-sm"
        />
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="text-center py-8">
          <div className="animate-pulse text-4xl mb-2">🌌</div>
          <div className="text-gray-600">Loading from NASA...</div>
        </div>
      )}

      {/* APOD Display */}
      {!isLoading && apod && (
        <div className="space-y-3">
          {/* Title */}
          <h3 className="font-bold text-lg text-gray-800">{apod.title}</h3>

          {/* Media (Image or Video) */}
          <div className="rounded-lg overflow-hidden bg-black">
            {apod.media_type === 'image' ? (
              <img
                src={apod.url}
                alt={apod.title}
                className="w-full h-auto"
              />
            ) : apod.media_type === 'video' ? (
              <iframe
                src={apod.url}
                title={apod.title}
                className="w-full h-64"
                frameBorder="0"
                allow="encrypted-media"
                allowFullScreen
              />
            ) : null}
          </div>

          {/* Explanation */}
          <div className="text-sm text-gray-700 max-h-32 overflow-y-auto bg-gray-50 rounded p-3">
            {apod.explanation}
          </div>

          {/* Copyright */}
          {apod.copyright && (
            <div className="text-xs text-gray-500 italic">
              © {apod.copyright}
            </div>
          )}
        </div>
      )}

      {/* Example Badge */}
      <div className="text-center text-xs text-gray-500 italic">
        ✨ This is an example widget - view source to learn!
      </div>
    </div>
  );
}

export default NasaPicture;
