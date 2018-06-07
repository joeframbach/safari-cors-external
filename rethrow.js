function fn() {
  try {
    throw new Error("error-message");
  } catch (e) {
    throw e;
  }
}
fn();
