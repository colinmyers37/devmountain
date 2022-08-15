function createTower(n) {
  let towerArr = [];
  for (let i = 0; i < n; i++) {
    towerArr.push(
      " ".repeat(n - i - 1) + "*".repeat(i * 2 + 1) + " ".repeat(n - i - 1)
    );
  }
  return towerArr;
}

console.log(createTower(5));
