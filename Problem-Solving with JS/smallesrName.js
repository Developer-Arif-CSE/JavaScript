const heights2 = ['rahim', 'robin', 'rafi', 'ron ', 'rashed'];

function findFriendWithSmallestName(names) {
  let smallestName = names[0]; 

  for (let i = 1; i < names.length; i++) {
    if (names[i] < smallestName) {
      smallestName = names[i];
    }
  }

  return smallestName;
}

const friendWithSmallestName = findFriendWithSmallestName(heights2);
console.log("The friend with the smallest name is:", friendWithSmallestName);