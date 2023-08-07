let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon", "pued"];

let ext = [".es", ".com"];

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < ext.length; l++) {
        console.log(pronoun[i] + adj[j] + noun[k] + ext[l]);
      }
    }
  }
}

console.log("Hello World");

pronoun.forEach((element) => {
  adj.forEach((element2) => {
    noun.forEach((element3) => {
      ext.forEach((element4) => {
        console.log(element + element2 + element3 + element4);
      });
    });
  });
});