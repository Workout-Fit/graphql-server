type Color =
  | 'black'
  | 'red'
  | 'green'
  | 'yellow'
  | 'blue'
  | 'magenta'
  | 'cyan'
  | 'white';

const colors: {
  reset: string;
  foreground: { [key in Color]: string };
  background: { [key in Color]: string };
} = {
  reset: '\x1b[0m',
  foreground: {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
  },
  background: {
    black: '\x1b[40m',
    red: '\x1b[41m',
    green: '\x1b[42m',
    yellow: '\x1b[43m',
    blue: '\x1b[44m',
    magenta: '\x1b[45m',
    cyan: '\x1b[46m',
    white: '\x1b[47m',
  },
};

const log = (message: string, foreground?: Color, background?: Color) =>
  console.log(
    `${colors.foreground[foreground ?? ''] ?? ''}${
      colors.background[background ?? ''] ?? ''
    }${message}${colors.reset}`
  );

const logger = {
  success: (message: string) => log(message, 'green'),
  error: (message: string) => log(message, 'red'),
};
