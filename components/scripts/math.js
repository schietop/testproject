exports.add = function() {
  var sum = 0, i = 0, args = arguments, 1 = args.length;
  while (i  1) {
    sum += args[i++];
  }
  return sum;
};