import { useState, useEffect } from 'react';

/**
 * Pokemon Battle Widget - EXAMPLE WIDGET
 *
 * This is a complete example widget to demonstrate:
 * - Fetching data from external APIs (PokeAPI)
 * - Managing complex state with multiple useState hooks
 * - Using useEffect for data fetching
 * - Conditional rendering
 * - Interactive game logic
 *
 * Students can enable this widget to see a working implementation!
 */
function PokemonBattle() {
  const [playerPokemon, setPlayerPokemon] = useState(null);
  const [opponentPokemon, setOpponentPokemon] = useState(null);
  const [playerHP, setPlayerHP] = useState(100);
  const [opponentHP, setOpponentHP] = useState(100);
  const [battleLog, setBattleLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // Fetch random Pokemon from PokeAPI
  const fetchRandomPokemon = async () => {
    const randomId = Math.floor(Math.random() * 150) + 1; // First 150 Pokemon
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const data = await response.json();
    return {
      name: data.name,
      sprite: data.sprites.front_default,
      id: data.id,
    };
  };

  // Start a new battle
  const startBattle = async () => {
    setIsLoading(true);
    setBattleLog([]);
    setGameOver(false);
    setPlayerHP(100);
    setOpponentHP(100);

    try {
      const [player, opponent] = await Promise.all([
        fetchRandomPokemon(),
        fetchRandomPokemon(),
      ]);
      setPlayerPokemon(player);
      setOpponentPokemon(opponent);
      setBattleLog([`${player.name.toUpperCase()} vs ${opponent.name.toUpperCase()}!`, 'Battle begins!']);
    } catch (error) {
      setBattleLog(['Error loading Pokemon. Please try again.']);
    } finally {
      setIsLoading(false);
    }
  };

  // Player attacks
  const attack = () => {
    if (gameOver) return;

    const damage = Math.floor(Math.random() * 20) + 10; // 10-30 damage
    const newOpponentHP = Math.max(0, opponentHP - damage);
    setOpponentHP(newOpponentHP);
    setBattleLog(prev => [...prev, `${playerPokemon.name.toUpperCase()} attacks for ${damage} damage!`]);

    if (newOpponentHP === 0) {
      setBattleLog(prev => [...prev, `🎉 You win! ${opponentPokemon.name.toUpperCase()} fainted!`]);
      setGameOver(true);
      return;
    }

    // Opponent counter-attack
    setTimeout(() => {
      const counterDamage = Math.floor(Math.random() * 20) + 10;
      const newPlayerHP = Math.max(0, playerHP - counterDamage);
      setPlayerHP(newPlayerHP);
      setBattleLog(prev => [...prev, `${opponentPokemon.name.toUpperCase()} counters for ${counterDamage} damage!`]);

      if (newPlayerHP === 0) {
        setBattleLog(prev => [...prev, `💀 You lose! ${playerPokemon.name.toUpperCase()} fainted!`]);
        setGameOver(true);
      }
    }, 500);
  };

  // Start initial battle on mount
  useEffect(() => {
    startBattle();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin text-4xl mb-2">⚡</div>
          <div className="text-gray-600">Loading Pokemon...</div>
        </div>
      </div>
    );
  }

  if (!playerPokemon || !opponentPokemon) {
    return (
      <div className="text-center py-8">
        <button
          onClick={startBattle}
          className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600"
        >
          Start Battle
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Battle Arena */}
      <div className="grid grid-cols-2 gap-4">
        {/* Player Pokemon */}
        <div className="text-center">
          <div className="text-sm font-semibold text-primary-600 mb-1">Your Pokemon</div>
          <img
            src={playerPokemon.sprite}
            alt={playerPokemon.name}
            className="w-24 h-24 mx-auto"
          />
          <div className="font-bold capitalize">{playerPokemon.name}</div>
          <div className="mt-2">
            <div className="text-xs text-gray-600 mb-1">HP: {playerHP}/100</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${playerHP}%` }}
              />
            </div>
          </div>
        </div>

        {/* Opponent Pokemon */}
        <div className="text-center">
          <div className="text-sm font-semibold text-red-600 mb-1">Opponent</div>
          <img
            src={opponentPokemon.sprite}
            alt={opponentPokemon.name}
            className="w-24 h-24 mx-auto transform scale-x-[-1]"
          />
          <div className="font-bold capitalize">{opponentPokemon.name}</div>
          <div className="mt-2">
            <div className="text-xs text-gray-600 mb-1">HP: {opponentHP}/100</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-red-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${opponentHP}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 justify-center">
        <button
          onClick={attack}
          disabled={gameOver}
          className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          ⚔️ Attack
        </button>
        <button
          onClick={startBattle}
          className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600"
        >
          🔄 New Battle
        </button>
      </div>

      {/* Battle Log */}
      <div className="bg-gray-100 rounded-lg p-3 h-32 overflow-y-auto">
        <div className="text-xs space-y-1">
          {battleLog.map((log, index) => (
            <div key={index} className="text-gray-700">
              {log}
            </div>
          ))}
        </div>
      </div>

      {/* Example Badge */}
      <div className="text-center text-xs text-gray-500 italic">
        ✨ This is an example widget - view source to learn!
      </div>
    </div>
  );
}

export default PokemonBattle;
