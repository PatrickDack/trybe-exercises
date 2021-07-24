function verificaPalindrome (string) {
    let word = string;
    let reverseword = '';
 for (let seach = word.length - 1; seach >= 0; seach -= 1) {
    reverseword += word[seach];
 };
    if (word === reverseword) {
        return true;
    } else {
        return false;
    };
};


console.log(verificaPalindrome('romametemamor'));
