function randomNum(min, max) {
    let range = max - min + 1;
    console.log("Function ran");
    return Math.floor(Math.random() * range) + min;
  }
  