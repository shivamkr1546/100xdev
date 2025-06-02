let cnt = 30;

const countdown = setInterval(() => {
    console.log('Countdown:', cnt);
    cnt--;

    if(cnt < 0) {
        clearInterval(countdown);
        console.log('Countdown finished!');
    }
}, 1000); // 1000 milliseconds = 1 second

