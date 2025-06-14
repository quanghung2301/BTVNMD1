function processConfirm(answer) {
  let result = "";
  if (answer) {
    result += "Excellent. We'll play a nice game of chess.";
    console.log(result);
  } else {
    result += "Maybe later then.";
    console.log(result);
  }
  return result;
}

processConfirm(true);
// processConfirm(false);
