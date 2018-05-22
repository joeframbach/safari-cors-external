window.onerror = function (message, source, lineno, colno, error) {
  console.log('report', message, source, lineno, colno, error);
  var stack = error ? error.stack : '';
  console.log(stack);
  var onerror = JSON.stringify({
    message: message,
    source: source,
    lineno: lineno,
    colno: colno
  }, null, 2);
  console.log(onerror);
  var errObj = error ? JSON.stringify({
    message: error.message,
    sourceURL: error.sourceURL,
    line: error.line,
    column: error.column
  }, null, 2) : '';
  console.log(errObj);
  console.log(
    '=== Stack ===<br>' + stack +
    '<br><br>=== window.onerror args ===<br>' + onerror +
    '<br><br>=== window.onerror error arg ===<br>' + errObj);
  return true;
};

P.when('ready').execute(function () {
  throw new Error('error-message');
});

