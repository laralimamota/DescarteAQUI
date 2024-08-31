import { createLogger, format, transports } from 'winston';

const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ timestamp, level, message, ...meta }) => {
  return `[${timestamp}] ${level}: ${message} ${
    Object.keys(meta).length ? JSON.stringify(meta, null, 2) : ''
  }`;
});

const devLogger = () => {
  return createLogger({
    level: 'silly',
    format: combine(
      format.colorize(),
      label({ label: 'dev' }),
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      myFormat,
    ),
    transports: [new transports.Console()],
  });
};

export default devLogger;
