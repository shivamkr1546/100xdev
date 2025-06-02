const strt = Date.now();

setTimeout(() => {
    const end = Date.now();
    console.log('Actual delay:', end - strt, 'milliseconds');
},1000); // 1000 milliseconds = 1 second