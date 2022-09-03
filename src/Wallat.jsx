import React from "react";
 import { LockClosedIcon } from '@heroicons/react/solid';

async function connect() {
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({method: "eth_requestAccounts",});
      const account = accounts[0];
      document.getElementById("ad").innerHTML = account;
    } else {
      document.getElementById("ad").innerHTML = "Please install Metamask";
    }
  }
function Wallat(){
    return(
        <>
          <form>
            <div>
              <button
                onClick={connect} type="button"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Connect wallet
              </button>
              <pre id="ad"></pre>
            </div>
          </form>
        </>
    );
}
export default Wallat;