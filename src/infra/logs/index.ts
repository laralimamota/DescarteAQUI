import devLogger from './devLogger';
import productionLogger from './prodLogger';

let index = null;

if (process.env.NODE_ENV === 'production') {
  index = productionLogger();
}

if (process.env.NODE_ENV === 'development') {
  index = devLogger();
}

export default index;
