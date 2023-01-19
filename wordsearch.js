
const wordSearch = (letters, word) => { 
    if(letters.length < 1) {
      return false
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    let arr = []
    for (let x = 0; x < letters[0].length; x++) {
        arr.push([]);
    }
    for (let i = 0; i < letters.length; i++) {
        for (let j = 0; j < letters[i].length; j++) {
            arr[j][i] = letters[i][j];
        }

      }

      const verticalJoin = arr.map(ls => ls.join(''))
      for (l of verticalJoin) {
          if (l.includes(word)) return true
      }
      return false;
}

module.exports = wordSearch;