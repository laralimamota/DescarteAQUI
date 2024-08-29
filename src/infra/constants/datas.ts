export enum DATA {
  HOJE = 'HOJE',
}

export function getData(data: DATA): Date {
  const now = new Date();
  const offset = -3 * 60 * 60 * 1000;
  const brazilTime = new Date(now.getTime() + offset);
  switch (data) {
    case DATA.HOJE:
      return brazilTime;
    default:
      return brazilTime;
  }
}
