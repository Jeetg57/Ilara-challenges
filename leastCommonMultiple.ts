function leastCommonMultiple(n1: number, n2: number) {
  // if n1 or n2 is 0 then return 0. LCM is 0
  if (n1 === 0 || n2 === 0) return 0;
  // if n1 = n2 then return n2. LCM is the same
  if (n1 === n2) return n1;
  let maxNum = Math.max(n1, n2);
  let minNum = Math.min(n1, n2);
  let lcm = maxNum;
  // Loops until an LCM is found. Number can be divided without remainder
  while (lcm % minNum !== 0) {
    lcm += maxNum;
  }
  return lcm;
}
// Run function
console.log(leastCommonMultiple(3, 4));

/*
Example execution

lcm of 3,5
max = 5
min = 3
lcm = 5
5/3 = 1 R 2 ! continues loop
5+5 = 10
10/3 = 3 R 1 ! continues loop
10+5 = 15 R 0 * Condition met
return 15
*/
