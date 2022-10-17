
var pronoun = ['the', 'our'];
var adj = ['great', 'big'];
var noun = ['jogger', 'racoon'];

for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let l = 0; l < noun.length; l++) {
            console.log(pronoun[i] + adj[j] + noun[l] + ".com")
        }
    }
}