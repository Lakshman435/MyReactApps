import { takeEvery, delay, put } from "redux-saga/effects";

function* AsyncIncCounter() {
  yield delay(2000);
  console.log("saga: dispatching new action...");
  yield put({ type: "ASYNC_INC_COUNTER" });
}
export function* watchIncrementCounter() {
  yield takeEvery("INC_COUNTER", AsyncIncCounter);
}
