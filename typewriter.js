const sentence = "hello there from lighthouse labs";

let x = 0;
for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
      // print the char here
    }, x) // <= 1s delay to make it noticeable. Can dial it down later.
x += 50;
  }
  setTimeout(() => {
    process.stdout.write("\n")
  }, x)



