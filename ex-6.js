let favoriteBooks = [];

function addFavoriteBook(bookName) {
  let result;
    if (bookName.includes("Beauty")) {
      result = favoriteBooks.push(bookName);
    }
  return result;
}


addFavoriteBook("Let Me Tell You What I Mean");
addFavoriteBook("Life Among the Terranauts");
addFavoriteBook("The Beauty of Living Twice");
addFavoriteBook("Black Beauty");
addFavoriteBook("Monstrous Beauty");

console.log(favoriteBooks);
