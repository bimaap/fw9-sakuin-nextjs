import { combineReducers } from "@reduxjs/toolkit";

import getUser from "./getUser";
import getTransactions from "./getTransactions";
import getAllUsers from "./getAllUsers";

const reducer = combineReducers({
  getUser,
  getTransactions,
  getAllUsers
});

export default reducer;