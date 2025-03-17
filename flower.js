document.addEventListener("DOMContentLoaded", () => {
    const numFlowers = 30; // Number of flowers
    const flowerEmojis = ["🌸", "💮", "🌺"]; // Different flower types

    function createFlower() {
        let flower = document.createElement("div");
        flower.classList.add("flower");
        flower.innerHTML = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
        document.body.appendChild(flower);

        // Random position and size
        let size = Math.random() * 20 + 20; // Random size between 20px - 40px
        let startPositionX = Math.random() * window.innerWidth;
        let animationDuration = Math.random() * 5 + 5; // Random speed between 5s - 10s

        // Apply styles
        flower.style.left = `${startPositionX}px`;
        flower.style.fontSize = `${size}px`;
        flower.style.animationDuration = `${animationDuration}s`;
        flower.style.animationDelay = `${Math.random() * 5}s`;

        // Remove flower after it falls
        setTimeout(() => {
            flower.remove();
        }, animationDuration * 1000);
    }

    // Generate new flowers every 500ms
    setInterval(createFlower, 500);
});
    