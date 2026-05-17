export function eurToDzd(eur: number): number {
  return Math.round((eur * 145) / 100) * 100;
}

export function fmtDzd(eur: number): string {
  return eurToDzd(eur).toLocaleString("fr-FR") + " DA";
}
