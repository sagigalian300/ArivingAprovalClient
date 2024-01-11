import React, { useEffect, useRef, useState } from "react";
import ManageDatabaseRequests from "../db/actions";
import AccountCard from "../components/AccountCard";

const AccountManagement = () => {
  const passRef = useRef();
  const [access, setAccess] = useState(false);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    if (access){
        ManageDatabaseRequests.getAccountInExistence().then((result) => {
          console.log(result);
            setAccounts(result);
        });
    }
  }, [access]);

  const delAccount = (_id) => {
    // console.log(_id);
    ManageDatabaseRequests.removeAllAccountData(_id).then((result) => {
      console.log(result);
    })
    setAccounts(accounts.filter(item => item._id !== _id))
  };

  return (
    <div>
      <h1>Account management</h1>
      <input type="password" ref={passRef} placeholder="password" />
      <button
        onClick={() => {
          if (
            process.env.REACT_APP_CREATE_ACCOUNT_MANAGER_CODE ==
            passRef.current.value
          ) {
            setAccess(true);
          } else {
            setAccess(false);
            alert("Wrong Password");
          }
        }}
      >
        Enter
      </button>

      {access && (
        <div>
          <h1>Hi, Here is the list that include all of the current accounts</h1>
          {accounts.map((account) => (
            <AccountCard
              key={account._id}
              name={account.name}
              password={account.password}
              _id={account._id}
              delAccount={delAccount}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AccountManagement;
