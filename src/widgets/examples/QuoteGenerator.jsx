import { useState, useEffect } from 'react';

/**
 * Quote Generator Widget - EXAMPLE WIDGET
 *
 * This is a complete example widget to demonstrate:
 * - Fetching data from APIs
 * - Managing loading states
 * - Error handling
 * - Auto-refresh with useEffect and setInterval
 * - Sharing functionality
 *
 * Students can enable this widget to see a working implementation!
 */
function QuoteGenerator() {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [autoRefresh, setAutoRefresh] = useState(false);

  const fetchQuote = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://zenquotes.io/api/random');
      if (!response.ok) throw new Error('Failed to fetch quote');
      const data = await response.json();
      // ZenQuotes returns an array with one quote object
      // Format: [{ q: "quote text", a: "author", h: "html" }]
      setQuote({
        content: data[0].q,
        author: data[0].a
      });
    } catch (err) {
      setError('Failed to load quote. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch initial quote on mount
  useEffect(() => {
    fetchQuote();
  }, []);

  // Auto-refresh every 10 seconds when enabled
  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(() => {
      fetchQuote();
    }, 10000);

    return () => clearInterval(interval);
  }, [autoRefresh]);

  const copyToClipboard = () => {
    if (quote) {
      navigator.clipboard.writeText(`"${quote.content}" - ${quote.author}`);
      alert('Quote copied to clipboard!');
    }
  };

  const tweetQuote = () => {
    if (quote) {
      const text = `"${quote.content}" - ${quote.author}`;
      const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
    }
  };

  if (error) {
    return (
      <div className="text-center py-8">
        <div className="text-red-500 mb-4">❌ {error}</div>
        <button
          onClick={fetchQuote}
          className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Quote Display */}
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-6 min-h-[150px] flex items-center justify-center">
        {isLoading ? (
          <div className="text-center">
            <div className="animate-pulse text-primary-600 text-xl mb-2">💭</div>
            <div className="text-gray-600">Loading inspiration...</div>
          </div>
        ) : quote ? (
          <div className="text-center">
            <p className="text-lg text-gray-800 italic mb-4">"{quote.content}"</p>
            <p className="text-sm text-primary-600 font-semibold">— {quote.author}</p>
          </div>
        ) : null}
      </div>

      {/* Controls */}
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={fetchQuote}
          disabled={isLoading}
          className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 disabled:bg-gray-400 text-sm"
        >
          🔄 New Quote
        </button>
        <button
          onClick={copyToClipboard}
          disabled={!quote}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 disabled:bg-gray-400 text-sm"
        >
          📋 Copy
        </button>
        <button
          onClick={tweetQuote}
          disabled={!quote}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-400 text-sm"
        >
          🐦 Tweet
        </button>
      </div>

      {/* Auto-refresh Toggle */}
      <div className="flex items-center justify-center gap-2">
        <label className="flex items-center gap-2 cursor-pointer text-sm">
          <input
            type="checkbox"
            checked={autoRefresh}
            onChange={(e) => setAutoRefresh(e.target.checked)}
            className="w-4 h-4"
          />
          <span className="text-gray-700">Auto-refresh every 10s</span>
        </label>
      </div>

      {/* Example Badge */}
      <div className="text-center text-xs text-gray-500 italic">
        ✨ This is an example widget - view source to learn!
      </div>
    </div>
  );
}

export default QuoteGenerator;
