import { _setCurrentAccounts } from ".";
import store from "..";

export const setCurrentAccount = data => store.dispatch(_setCurrentAccounts(data))