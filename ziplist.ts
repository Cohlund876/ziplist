const ziplist = function (list1: string[], list2: string[]): string[] {
  const retval: string[] = [];
  if (list1.length !== list2.length) {
    console.log('list not of same length');
    return retval;
  }
  let i = 0;
  while (i < list1.length) {
    retval.push(list1[i]);
    retval.push(list2[i]);
    i++;
  }
  return retval;
};
const l1 = ['a', 'c', 'e', 'g', 'i'];
const l2 = ['1', '3', '5', '7', '9'];
console.log(ziplist(l1, l2));
