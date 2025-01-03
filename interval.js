let count = 0;
const interval = setInterval(() => {
    count++;
    console.log("🖕 ".repeat(count));
    if(count === 30) {
        console.log("done");
        clearInterval(interval);
    }
},1000);