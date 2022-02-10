function analyzeSecurity(arr) {
  const tP = _.reduce(arr, function (memo, each) { return each.truePositives + memo; }, 0);
  const fP = _.reduce(arr, function (memo, each) { return each.falsePositives + memo; }, 0);
  const tN = _.reduce(arr, function (memo, each) { return each.trueNegatives + memo; }, 0);
  const fN = _.reduce(arr, function (memo, each) { return each.falseNegatives + memo; }, 0);
  return {
    truePositives: tP, falsePositives: fP, trueNegatives: tN, falseNegatives: fN,
  };
}

console.log(analyzeSecurity([
  {
    truePositives: 1,
    falsePositives: 4,
    trueNegatives: 8,
    falseNegatives: 2,
  },
  {
    truePositives: 2,
    falsePositives: 4,
    trueNegatives: 16,
    falseNegatives: 1,
  },
]));
