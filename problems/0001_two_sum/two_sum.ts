function twoSum(nums: number[], target: number) {
  const vistos = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complemento = target - nums[i];
    if (vistos.has(complemento)) {
      return [vistos.get(complemento)!, i];
    }
    vistos.set(nums[i], i);
  }
  return [];
}

console.log(twoSum([3, 7, 11, 15], 9));
