import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getRepoFromAPi } from "./getRepoFromApi";
import { fetchRepositories, fetchRepositoriesError, fetchRepositoriesSuccess } from "./personalHomepageSlice";

function* fetchRepositoriesHandler() {
    try {
        yield delay(2000);
        const repositories = yield call(getRepoFromAPi);
        yield put(fetchRepositoriesSuccess(repositories));
    } catch (error) {
        yield put(fetchRepositoriesError());
    }
};

export function* personalHomepageSaga() {
    yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
};