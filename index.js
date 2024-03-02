// Random Content Generator

// Function to generate random content
function generateRandomContent() {
    // Sample data for different content types
    const contentTypes = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", // Sample text content
        42, // Sample numeric content
        { key: "value" }, // Sample object content
        ["item1", "item2", "item3"] // Sample array content
    ];

    // Selecting a random content type
    const randomIndex = Math.floor(Math.random() * contentTypes.length);
    return contentTypes[randomIndex];
}

// Example usage
const randomContent = generateRandomContent();
console.log(randomContent);
