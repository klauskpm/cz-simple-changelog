var conventionalCommitTypes = require('conventional-commit-types');

var ccTypes = conventionalCommitTypes.types;
var chore = ccTypes.chore;

chore.description = 'Other changes (test, refactor, docs, build, improv)';

var types = {
    feat: ccTypes.feat,
    fix: ccTypes.fix,
    perf: ccTypes.perf,
    chore: chore,
    revert: ccTypes.revert
};

module.exports = types;