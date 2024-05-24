import React, { useEffect } from "react";
import authStore from "../stores/authStores";

function LogoutPage() {
  const store = authStore();

  useEffect(() => {
    store.logout();

  },[]);

  return <h1>You are logged out ...</h1>;
}

export default LogoutPage;
