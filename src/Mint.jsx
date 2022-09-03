 import React from "react";
 import { LockClosedIcon } from '@heroicons/react/solid';

async function minting(){
  let addr=document.getElementById("a").value;
  let amt=document.getElementById("n").value;
  let check=await window.instance.mint(addr,amt);
  check.wait(); 
  document.getElementById("l1").innerHTML="minted";
  console.log("minted");
 
}
async function bal(address){
  
  let addr=document.getElementById("a2").value;
  let bal=await window.instance.balances(addr);
   
  document.getElementById("l2").innerHTML=bal;
  console.log(bal);
 
 
}



function Mint() {


   return (
      <>
      {/* <input type="text" id="a"></input><br></br>
      <input type="number" id="n"></input><br></br>
      <button type="button" onClick={minting}>mint</button> */}

      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">My Contract</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
            </p>
          </div>

          
         

          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="address" className="sr-only">
                  Wallet Address
                </label>
                <input
                  id="a"
                  name="address"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Wallet Address"
                />
              </div>
              <div>
                <label htmlFor="amount" className="sr-only">
                  Amount
                </label>
                <input
                  id="n"
                  name="amount"
                  type="number"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Amount"
                />
              </div>
            </div>

            <div>
              <button
              onClick={minting}
                type="button" 
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Mint Tokens
              </button>
              <label id="l1"></label><br></br>
              <input
                  id="a2"
                  name="address"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Wallet Address"
                />
                <br></br>
              <button
              onClick={bal}
                type="button" 
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Get Balance
              </button>
              <div><br></br>
                <label id="l2">
                  "Balance Here"
                </label>
              </div>
              {/* <label id="l2">label</label> */}
            </div>
          </form>

        </div>
      </div>
    </>
  )
}

 export default Mint;