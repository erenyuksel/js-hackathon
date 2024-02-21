function wordCount(string) {

    const words = string.split(" ");

    if (words.length > 30) {
        const firstWords = words.slice(0, 30).join(' ');
        console.error(`ERROR: Too many words! We only can accept the following words: ${firstWords}`);
    } else {
        console.log(`Number of words: ${words.length}`);
    };
}

wordCount("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint-Exupery"); // 24

wordCount("Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like. ― Lao Tzu") // ERROR: you wrote 33 words. We only can accept the following words: "Life is a series of natural and spontaneous changes. Don't resist them; that only creates sorrow. Let reality be reality. Let things flow naturally forward in whatever way they like."