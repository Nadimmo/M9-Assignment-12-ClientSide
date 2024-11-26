import React from "react";
import usePayment from "../../../components/Hooks/usePayment";

const PaymentHistory = () => {
  const {payments} = usePayment();
//   console.log(payments);

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-500 to-teal-400 p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-4xl font-extrabold text-white">Payment History</h1>
        <p className="text-white mt-2">Review all past transactions in one place.</p>
      </div>

      {/* Table Container */}
      <div className="overflow-hidden border rounded-lg shadow-lg">
        <table className="w-full text-sm text-left text-gray-600">
          <thead className="bg-gradient-to-r from-teal-500 to-blue-500 text-white uppercase text-xs">
            <tr>
              <th className="px-6 py-4">#</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Transaction ID</th>
            </tr>
          </thead>
          <tbody>
            {payments && payments.length > 0 ? (
              payments.map((payment, index) => (
                <tr
                  key={payment.id}
                  className={`hover:bg-gray-100 ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="px-6 py-4 font-medium text-gray-900">{index + 1}</td>
                  <td className="px-6 py-4">{payment.email || "N/A"}</td>
                  <td className="px-6 py-4">{payment.transactionId || "N/A"}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="px-6 py-4 text-center text-gray-500 italic"
                >
                  No payment history available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        <p>Showing {payments?.length || 0} payments in total.</p>
      </div>
    </div>
  );
};

export default PaymentHistory;
