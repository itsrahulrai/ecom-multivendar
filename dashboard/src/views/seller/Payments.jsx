import React, { useMemo, useState } from "react";
import {
  Wallet,
  Download,
  Eye,
  Trash2,
  ArrowUpRight,
  ArrowDownLeft,
  X,
} from "lucide-react";
import Pagination from "../Pagination";

const withdrawalData = [
  {
    id: "#WD-1001",
    amount: "₹10,000",
    account: "XXXXXX4567",
    date: "12 May 2026",
    status: "Pending",
  },
  {
    id: "#WD-1002",
    amount: "₹25,000",
    account: "XXXXXX4567",
    date: "10 May 2026",
    status: "Approved",
  },
  {
    id: "#WD-1003",
    amount: "₹15,000",
    account: "XXXXXX4567",
    date: "08 May 2026",
    status: "Rejected",
  },
  {
    id: "#WD-1004",
    amount: "₹18,000",
    account: "XXXXXX4567",
    date: "06 May 2026",
    status: "Approved",
  },
  {
    id: "#WD-1005",
    amount: "₹7,500",
    account: "XXXXXX4567",
    date: "04 May 2026",
    status: "Pending",
  },
  {
    id: "#WD-1006",
    amount: "₹22,000",
    account: "XXXXXX4567",
    date: "02 May 2026",
    status: "Approved",
  },
];

const Payments = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showWithdrawalModal, setShowWithdrawalModal] = useState(false);

  const [withdrawalForm, setWithdrawalForm] = useState({
    amount: "",
    bank: "HDFC Bank •••• 4567",
    remark: "",
  });

  const perPage = 5;

  const paginatedData = useMemo(() => {
    return withdrawalData.slice(
      (currentPage - 1) * perPage,
      currentPage * perPage
    );
  }, [currentPage]);

  return (
    <div className="space-y-6 pr-0 xl:pr-8">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Withdrawal Requests
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Request and manage your payouts
          </p>
        </div>

        <button
          onClick={() => setShowWithdrawalModal(true)}
          className="
    flex items-center gap-2
    px-5 py-3
    rounded-2xl
    bg-gradient-to-r
    from-[#F54900]
    to-orange-500
    text-white
    text-sm
    font-semibold
    shadow-lg
    shadow-orange-200
    hover:scale-105
    transition-all
  "
        >
          <Wallet size={18} />
          Request Withdrawal
        </button>      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div
          className="
            bg-white
            rounded-[28px]
            p-6
            border border-slate-100
            shadow-[0_10px_40px_rgba(0,0,0,0.05)]
          "
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-slate-500">
                Available Balance
              </p>

              <h3 className="text-3xl font-bold mt-2">
                ₹2,45,000
              </h3>
            </div>

            <div
              className="
                w-14 h-14
                rounded-2xl
                bg-orange-100
                flex items-center justify-center
              "
            >
              <Wallet
                size={28}
                className="text-[#F54900]"
              />
            </div>
          </div>
        </div>

        <div
          className="
            bg-white
            rounded-[28px]
            p-6
            border border-slate-100
            shadow-[0_10px_40px_rgba(0,0,0,0.05)]
          "
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-slate-500">
                Pending Withdrawal
              </p>

              <h3 className="text-3xl font-bold mt-2 text-yellow-500">
                ₹35,000
              </h3>
            </div>

            <div
              className="
                w-14 h-14
                rounded-2xl
                bg-yellow-100
                flex items-center justify-center
              "
            >
              <ArrowUpRight
                size={28}
                className="text-yellow-600"
              />
            </div>
          </div>
        </div>

        <div
          className="
            bg-white
            rounded-[28px]
            p-6
            border border-slate-100
            shadow-[0_10px_40px_rgba(0,0,0,0.05)]
          "
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-slate-500">
                Total Withdrawn
              </p>

              <h3 className="text-3xl font-bold mt-2 text-emerald-600">
                ₹1,80,000
              </h3>
            </div>

            <div
              className="
                w-14 h-14
                rounded-2xl
                bg-emerald-100
                flex items-center justify-center
              "
            >
              <ArrowDownLeft
                size={28}
                className="text-emerald-600"
              />
            </div>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div
        className="
          overflow-hidden
          rounded-[25px]
          border border-white/60
          bg-white/80
          backdrop-blur-xl
          shadow-[0_20px_60px_rgba(0,0,0,0.04)]
        "
      >
        {/* HEADER */}
        <div
          className="
            hidden md:grid
            grid-cols-7
            gap-4
            px-6 py-5
            border-b border-slate-100
            bg-slate-50/70
            text-xs
            font-bold
            uppercase
            tracking-wider
            text-slate-400
          "
        >
          <div>S.No</div>
          <div>Request ID</div>
          <div>Amount</div>
          <div>Account</div>
          <div>Date</div>
          <div>Status</div>
          <div className="text-right">Action</div>
        </div>

        {/* ROWS */}
        <div className="divide-y divide-slate-100">
          {paginatedData.map((item, index) => (
            <div
              key={item.id}
              className="
                grid grid-cols-1 md:grid-cols-7
                gap-4
                items-center
                px-6 py-5
                hover:bg-orange-50/40
                transition-all
              "
            >
              <div>
                <p className="md:hidden text-xs text-slate-400">
                  S.No
                </p>
                <h4 className="font-semibold">
                  {(currentPage - 1) * perPage + index + 1}
                </h4>
              </div>

              <div>
                <p className="md:hidden text-xs text-slate-400">
                  Request ID
                </p>
                <h4>{item.id}</h4>
              </div>

              <div>
                <p className="md:hidden text-xs text-slate-400">
                  Amount
                </p>
                <h4 className="font-bold">{item.amount}</h4>
              </div>

              <div>
                <p className="md:hidden text-xs text-slate-400">
                  Account
                </p>
                <h4>{item.account}</h4>
              </div>

              <div>
                <p className="md:hidden text-xs text-slate-400">
                  Date
                </p>
                <h4>{item.date}</h4>
              </div>

              <div>
                <p className="md:hidden text-xs text-slate-400">
                  Status
                </p>

                <span
                  className={`
                    inline-flex items-center
                    px-3 py-1.5
                    rounded-xl
                    text-xs
                    font-bold
                    ${item.status === "Approved"
                      ? "bg-emerald-100 text-emerald-600"
                      : item.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }
                  `}
                >
                  {item.status}
                </span>
              </div>

              <div className="flex md:justify-end gap-2">
                <button
                  className="
                    w-9 h-9
                    rounded-xl
                    bg-blue-100
                    text-blue-600
                    flex items-center justify-center
                    hover:bg-blue-500
                    hover:text-white
                    transition-all
                  "
                >
                  <Eye size={16} />
                </button>

                <button
                  className="
                    w-9 h-9
                    rounded-xl
                    bg-red-100
                    text-red-600
                    flex items-center justify-center
                    hover:bg-red-500
                    hover:text-white
                    transition-all
                  "
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={withdrawalData.length}
          perPage={perPage}
        />
      </div>


{/* Withdrawal Modal */}
{showWithdrawalModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">

    <div className="w-full max-w-md bg-white rounded-[24px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">

      {/* Header */}
      <div className="p-4 border-b border-slate-100 flex items-center justify-between">

        <div>
          <h3 className="text-lg font-bold text-slate-800">
            Request Withdrawal
          </h3>

          <p className="text-xs text-slate-500 mt-1">
            Withdraw your available balance
          </p>
        </div>

        <button
          onClick={() => setShowWithdrawalModal(false)}
          className="
            w-9 h-9
            rounded-xl
            bg-slate-100
            hover:bg-red-100
            hover:text-red-500
            transition-all
            flex items-center justify-center
          "
        >
          <X size={16} />
        </button>

      </div>

      {/* Body */}
      <div className="p-4 space-y-4">

        {/* Balance Card */}
        <div className="bg-gradient-to-r from-[#F54900] to-orange-500 rounded-2xl p-4 text-white">

          <p className="text-xs opacity-90">
            Available Balance
          </p>

          <h2 className="text-2xl font-bold mt-1">
            ₹2,45,000
          </h2>

        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Amount
          </label>

          <input
            type="number"
            placeholder="Enter withdrawal amount"
            value={withdrawalForm.amount}
            onChange={(e) =>
              setWithdrawalForm({
                ...withdrawalForm,
                amount: e.target.value,
              })
            }
            className="
              w-full
              h-11
              border border-slate-200
              rounded-xl
              px-4
              text-sm
              focus:outline-none
              focus:border-[#F54900]
            "
          />
        </div>

        {/* Bank */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Bank Account
          </label>

          <select
            value={withdrawalForm.bank}
            onChange={(e) =>
              setWithdrawalForm({
                ...withdrawalForm,
                bank: e.target.value,
              })
            }
            className="
              w-full
              h-11
              border border-slate-200
              rounded-xl
              px-4
              text-sm
              focus:outline-none
              focus:border-[#F54900]
            "
          >
            <option>HDFC Bank •••• 4567</option>
            <option>SBI Bank •••• 8921</option>
            <option>ICICI Bank •••• 6543</option>
          </select>
        </div>

        {/* Remark */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Remark
          </label>

          <textarea
            rows={3}
            placeholder="Optional note"
            value={withdrawalForm.remark}
            onChange={(e) =>
              setWithdrawalForm({
                ...withdrawalForm,
                remark: e.target.value,
              })
            }
            className="
              w-full
              border border-slate-200
              rounded-xl
              p-3
              text-sm
              resize-none
              focus:outline-none
              focus:border-[#F54900]
            "
          />
        </div>

      </div>

      {/* Footer */}
      <div className="border-t border-slate-100 p-4 flex gap-3">

        <button
          onClick={() => setShowWithdrawalModal(false)}
          className="
            flex-1
            h-11
            rounded-xl
            border border-slate-200
            text-slate-600
            font-medium
            hover:bg-slate-50
          "
        >
          Cancel
        </button>

        <button
          className="
            flex-1
            h-11
            rounded-xl
            bg-gradient-to-r
            from-[#F54900]
            to-orange-500
            text-white
            font-semibold
            shadow-lg
            shadow-orange-200
            hover:scale-[1.02]
            transition-all
          "
        >
          Submit
        </button>

      </div>

    </div>

  </div>
)}
    </div>
  );
};

export default Payments;