import { createLogger, format, transports } from 'winston';

const { combine, label, json } = format;

const productionLogger = () => {
  return createLogger({
    level: 'info',
    format: combine(label({ label: 'prod' }), json()),
    transports: [
      new transports.File({ filename: 'error.log', level: 'error' }),
      new transports.File({ filename: 'combined.log' }),
      new transports.Console(),
    ],
  });
};

export default productionLogger;
