document.getElementById('generate-snack').addEventListener('click', async () => {
    const response = await fetch('https://localhost:3000/random-snack');
    const data = await response.json();
    document.getElementById('snack-result').innerText = `${data.snack} - ${data.message}`;
});
