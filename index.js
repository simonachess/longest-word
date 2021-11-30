function longestWord(string) {
    const splitedString = string.split(' ');
    splitedString.sort((a, b) => b.length - a.length);
    const longestWordLength = splitedString[0].length;
    const longestWord = splitedString.filter(word => word.length === longestWordLength);
    const lastLongestWord = longestWord[longestWord.length - 1]
    console.log(lastLongestWord);
}

longestWord("Never gonna give you up")