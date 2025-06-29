/**
 * Create a Backpack object.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

const fork = {
  width: 10,
  material: 'wood',
  sturdy: false,
  increaseLength: function (newwidth) {
    this.width = newwidth + this.width 
  }
}
console.log('before_function', fork.width)
fork.increaseLength(20)

console.log("The backpack object:", backpack);
console.log("The backpack object:", backpack.pocketNum);

console.log("I am working on something new")
console.log(fork.material)

console.log('after_function', fork.width)

