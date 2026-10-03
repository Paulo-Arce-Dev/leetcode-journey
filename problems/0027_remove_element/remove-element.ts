function removeElement(nums: number[], val: number): number {
  let k = 0;
  let end = nums.length - 1;

  while (k <= end) {
    if (nums[k] === val) {
      nums[k] = nums[end];
      end--;
    } else {
      k++;
    }
  }

  return k;
}
