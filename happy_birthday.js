function startCountdown(seconds, callback) {
  let remaining = seconds;
  const timer = setInterval(() => {
    process.stdout.write(`\r⏳ Loading.. ${remaining} s   `);
    remaining--;
    if (remaining < 0) {
      clearInterval(timer);
      callback();
    }
  }, 1000);
}

const asciiArt = `
╔══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╗
║██╗  ██╗██████╗ ██████╗     ████████╗ ██████╗     ███╗   ███╗███████╗    ██████╗ ██╗  ██╗    ██╗   ██╗███████╗ █████╗ ██████╗ ║
║██║  ██║██╔══██╗██╔══██╗    ╚══██╔══╝██╔═══██╗    ████╗ ████║██╔════╝    ╚════██╗██║  ██║    ╚██╗ ██╔╝██╔════╝██╔══██╗██╔══██╗║
║███████║██████╔╝██║  ██║       ██║   ██║   ██║    ██╔████╔██║█████╗       █████╔╝███████║     ╚████╔╝ █████╗  ███████║██████╔╝║
║██╔══██║██╔══██╗██║  ██║       ██║   ██║   ██║    ██║╚██╔╝██║██╔══╝      ██╔═══╝ ╚════██║      ╚██╔╝  ██╔══╝  ██╔══██║██╔══██╗║
║██║  ██║██████╔╝██████╔╝       ██║   ╚██████╔╝    ██║ ╚═╝ ██║███████╗    ███████╗     ██║       ██║   ███████╗██║  ██║██║  ██║║
║╚═╝  ╚═╝╚═════╝ ╚═════╝        ╚═╝    ╚═════╝     ╚═╝     ╚═╝╚══════╝    ╚══════╝     ╚═╝       ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝║
╚══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════════╝
`;

function birthdayMessage(age) {
  return `
╔════════════════════════════════╗
║           HBD TO ME!           ║
╠════════════════════════════════╣
║        HBD TO ME ${age} ขวบ        ║
╚════════════════════════════════╝
`;
}


function typeWriter(text, delay = 20, onComplete) {
  let i = 0;
  function nextChar() {
    if (i < text.length) {
      process.stdout.write(text[i]);
      i++;
      setTimeout(nextChar, delay);
    } else if (typeof onComplete === 'function') {
      onComplete();
    }
  }
  nextChar();
}


function printGreetingAndSchedule() {
  typeWriter(asciiArt, 1, () => {
    process.stdout.write('\n');
    typeWriter(birthdayMessage(24), 1);
  });
}

startCountdown(20, printGreetingAndSchedule);
