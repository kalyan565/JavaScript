function testEventLoop() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log("Timer",i);
      if (i === 3) {
        Promise.resolve().then(() => {
          console.log("Microtask 1");
        });
        Promise.resolve().then(() => {
          console.log("Microtask 2");
        });
        Promise.resolve().then(() => {
          console.log("Microtask 3");
        });
      }
    }, 0);
  }
}

testEventLoop();