import { all } from "redux-saga/effects";
import { modeSaga } from "../common/ModeSwitcher/modeSaga";
import { personalHomepageSaga } from "../features/PersonalHomepage/personalHomepageSaga";

export function* saga() {
    yield all([
        modeSaga(),
        personalHomepageSaga(),
    ]);
};