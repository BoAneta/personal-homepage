import { all } from "redux-saga/effects";
import { modeSaga } from "../common/modeSaga";
import { personalHomepageSaga } from "../features/personalHomepage/personalHomepageSaga";

export function* saga() {
    yield all([
        modeSaga(),
        personalHomepageSaga(),
    ]);
};