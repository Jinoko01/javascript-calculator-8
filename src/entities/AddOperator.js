export default class AddOperator {
  add(nums) {
    return nums.reduce((acc, num) => acc + num, 0);
  }
}
