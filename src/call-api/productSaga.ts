import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getProductFailure, getProductSuccess } from "./productSlice";

function* toGetProductFetch(): any {
  try {
    const response = yield call(() =>
      axios.get(`${process.env.REACT_APP_SERVER_URL}/api/products`)
    );
    const arrayProducts = response.data;

    yield put(getProductSuccess(arrayProducts.products));
  } catch (error: any) {
    yield put(getProductFailure(error));
  }
}
function* productSaga() {
  yield takeEvery("products/getProductFetch", toGetProductFetch);
}

export default productSaga;
