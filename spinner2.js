process.stdout.write('hello from spinner.js... \rheyyy\n')
let time = 100;
const animation = ['|', '/', '-', '\\' ]

for (let i = 0; i < animation.length + 1; i++) {
    setTimeout(() => {
        process.stdout.write(`\r${animation[i % animation.length]}   `);
      }, time);
      time += 200;
}
