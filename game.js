document.getElementById('fetchData').addEventListener('click', async () => {
    try {
        const response = await fetch('/api/games');
        const games = await response.json();
        displayGames(games);
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to fetch games data');
    }
});

function displayGames(games) {
    const container = document.getElementById('gamesContainer');
    container.innerHTML = '';
    
    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <h3>${game.title}</h3>
            <p><strong>Description:</strong> ${game.description}</p>
            <p><strong>Difficulty:</strong> ${game.difficulty}</p>
            <p><strong>Max Attempts:</strong> ${game.maxAttempts}</p>
        `;
        container.appendChild(gameCard);
    });
}