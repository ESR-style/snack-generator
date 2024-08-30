import express from "express"
const app = express();
const port = 3000;

app.get('/random-snack', (req, res) => {
    const snacks = [
        { name: 'Apple', is_healthy: true },
        { name: 'Chips', is_healthy: false }
    ];
    const healthySnacks = snacks.filter(snack => snack.is_healthy);
    const nonHealthySnacks = snacks.filter(snack => !snack.is_healthy);
    const isHealthy = Math.random() < 0.7; 
    const chosenSnacks = isHealthy ? healthySnacks : nonHealthySnacks;
    const selectedSnack = chosenSnacks[Math.floor(Math.random() * chosenSnacks.length)];
    const message = isHealthy ? "Time to have something healthy!" : "Enjoy your tasty snack";
    res.json({ snack: selectedSnack.name, message });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
