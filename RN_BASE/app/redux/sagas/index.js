import {
  watchGetInfo,
  watchGetHome,
  watchGetProduct
} from "./NetworkSaga";

export default function* rootSaga() {
  yield watchGetInfo
  yield watchGetHome
  yield watchGetProduct
}
