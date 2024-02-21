// Create a function to return the majority of vote in the array. 
// The candidate with the majority of vote will be our next president!

function whoIsThePresident(votes) {

    if (votes.length === 0) {
        return 'Is it a democratic vote here? Please vote again.';
    };

    const counts = {};

    votes.forEach(person => {
        counts[person] = (counts[person] || 0) + 1;
    });

    const charted = Object.entries(counts).sort((a, b) => b[1] - a[1]);

    if (charted.length > 1 && charted[0][1] === charted[1][1]) {
        return 'We got a draw! Please vote again.';
    };

    return `${charted[0][0]} is our new president with ${charted[0][1]} votes`;

}



console.log(whoIsThePresident(["Teddy Bear", "Chewbacca", "Dracula", "Chewbacca"]));
// Chewbacca is our new president with 2 votes !

console.log(whoIsThePresident(["Chewbacca", "Teddy Bear", "Dracula", "Chewbacca", "Dracula"]));
// We got a draw ! Please vote again.

console.log(whoIsThePresident([]));
// Is it a democratic vote here ? Please vote again.

console.log(whoIsThePresident(["Chewbacca", "Teddy Bear", "Teddy Bear", "Teddy Bear", "Dracula", "Chewbacca", "Dracula"]));
