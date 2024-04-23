import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function CheckoutPage() {
  const [isExpanded, setIsExpanded] = useState();
  const [isExpanded2, setIsExpanded2] = useState();

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="min-h-screen">
        <div className="flex justify-center items-center w-full">
          <div className="max-w-4xl px-10 py-7 bg-transparent w-full flex flex-col justify-center items-center">
            <div className="w-full px-5 py-5 flex flex-col justify-center items-center bg-transparent">
              <div className="text-3xl font-normal text-center max-w-96">
                Confirm your card Details and Pay
              </div>
            </div>
            <div className="flex flex-col items-center mt-3 w-full">
              {/* This is the signup/login box */}
              <div className="w-full px-3 py-2 border-1 rounded border-[#E0E0E0] bg-transparent hover:border-[#E0E0E0] hover:bg-transparent shadow-inner flex items-center w-full">
                <div
                  className="w-full px-1 flex-col items-center"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  <div className="w-full flex items-center">
                    <h1 className="text-lg grow">Step 1: Logged in As:</h1>
                  </div>
                  {isExpanded && (
                    <div className="w-full flex items-center text-sm mt-3 pb-2">
                      <div className="focus:outline-none bg-[#EBE8FD] font-medium px-3 text-sm py-2 text-center rounded-sm mr-2">
                        wassup@unifest.in
                      </div>
                      <div className="focus:outline-none bg-transparent font-medium px-3 text-[#0062F4] cursor-pointer text-sm py-2 text-center rounded-sm mr-2">
                        <Link to="/" onClick={(e) => e.stopPropagation()}>
                          Sign Out
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* This is the user chosen cart box */}
              <div className="w-full mt-2.5 px-3 py-2 border-1 rounded border-[#E0E0E0] bg-transparent hover:border-[#E0E0E0] hover:bg-transparent shadow-inner flex items-center w-full">
                <div
                  className="w-full px-1 flex-col items-center"
                  onClick={() => setIsExpanded2(!isExpanded2)}
                >
                  <div className="w-full flex items-center">
                    <h1 className="text-lg grow">Step 1: Logged in As:</h1>
                  </div>
                  {isExpanded2 && (
                    <div className="w-full flex items-center text-sm mt-3 pb-2">
                      <table className="w-full">
                        <thead>
                          <tr >
                            <th>Items</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* Replace with your actual data */}
                          <tr>
                            <td>Item 1</td>
                            <td>2</td>
                            <td>$20</td>
                          </tr>
                          <tr>
                            <td>Item 2</td>
                            <td>1</td>
                            <td>$10</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full mt-2.5 px-3 py-2 border-1 rounded border-[#E0E0E0] bg-transparent hover:border-[#E0E0E0] hover:bg-transparent shadow-inner flex items-center w-full">
                <div
                  className="w-full px-1 flex-col items-center"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  <div className="w-full flex items-center">
                    <h1 className="text-lg grow">Step 1: Logged in As:</h1>
                  </div>
                  {isExpanded && (
                    <div className="w-full flex items-center text-sm mt-3 pb-2">
                      <div className="focus:outline-none bg-[#EBE8FD] font-medium px-3 text-sm py-2 text-center rounded-sm mr-2">
                        wassup@unifest.in
                      </div>
                      <div className="focus:outline-none bg-transparent font-medium px-3 text-[#0062F4] cursor-pointer text-sm py-2 text-center rounded-sm mr-2">
                        <Link to="/" onClick={(e) => e.stopPropagation()}>
                          Sign Out
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CheckoutPage;
