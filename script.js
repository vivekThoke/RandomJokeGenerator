const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
    "I used to be a baker, but I couldn't make enough dough.",
    "Why don't skeletons fight each other? They don't have the guts!",
    "Why don't scientists trust atoms? Because they make up everything!",
    "What do you call a fish with no eyes? Fsh!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What's the best time to go to the dentist? Tooth-hurty!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "I'm reading a book about anti-gravity. It's impossible to put down!"
  ];

//   Function to generate random joke

function generateRandomJoke() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    return jokes[randomIndex];
}

// Event listner for button click

document.getElementById("generateButton").addEventListener("click", function() {
    const jokeElement = document.getElementById("joke");
    const joke = generateRandomJoke();
    jokeElement.textContent = joke;
  });