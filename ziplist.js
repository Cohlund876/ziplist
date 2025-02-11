console.log('test')
var ziplist = function (list1, list2) {
    var retval = [];
    if (list1.length !== list2.length) {
        console.log('list not of same length');
        return retval;
    }
    var i = 0;
    while (i < list1.length) {
        retval.push(list1[i]);
        retval.push(list2[i]);
        i++;
    }
    return retval;
};
var l1 = ['a', 'c', 'e', 'g', 'i'];
var l2 = ['1', '3', '5', '7', '9'];
console.log(ziplist(l1, l2));

