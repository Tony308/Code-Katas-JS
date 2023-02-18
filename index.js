// EVENT LOOP LOGIC
const timeouts = () => {
    setTimeout(() => {
        console.log('drei');
    }, 200);
    setTimeout(() => {
        console.log('vier');
    }, 200);
    console.log('eins');
    console.log('real second');    
    console.log('zwei');
}
console.log("Hello World!");
