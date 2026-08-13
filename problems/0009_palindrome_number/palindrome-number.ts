function isPalindrome(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  let reverted = 0;
  let original = x;

  while (x > reverted) {
    reverted = reverted * 10 + (x % 10);
    x = Math.trunc(x / 10);
  }

  return original === reverted || original === Math.trunc(reverted / 10);
}
