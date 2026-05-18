import React, { useMemo, useState } from "react";
import {
  Eye,
  Trash2,
  Download,
} from "lucide-react";
import Pagination from "../Pagination";

const withdrawalData = [
  {
    id: 1,
    amount: "₹12,500",
    status: "Pending",
    date: "12 May 2026",
  },
  {
    id: 2,
    amount: "₹8,000",
    status: "Approved",
    date: "11 May 2026",
  },
  {
    id: 3,
    amount: "₹15,700",
    status: "Rejected",
    date: "10 May 2026",
  },
  {
    id: 4,
    amount: "₹22,000",
    status: "Approved",
    date: "09 May 2026",
  },
  {
    id: 5,
    amount: "₹5,400",
    status: "Pending",
    date: "08 May 2026",
  },
  {
    id: 6,
    amount: "₹18,900",
    status: "Approved",
    date: "07 May 2026",
  },
];

const PaymentRequest = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const perPage = 5;

  const paginatedRequests = useMemo(() => {
    return withdrawalData.slice(
      (currentPage - 1) * perPage,
      currentPage * perPage
    );
  }, [currentPage]);

  return (
    <div className="space-y-6 pr-0 xl:pr-8">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Withdrawal Requests
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Manage all withdrawal payment requests
          </p>
        </div>

        <button
          className="
            flex items-center gap-2
            px-5 py-3
            rounded-2xl
            bg-gradient-to-r from-[#F54900] to-orange-500
            text-white
            text-sm font-semibold
            shadow-lg shadow-orange-200
            hover:scale-105
            transition-all
          "
        >
          <Download size={16} />
          Export
        </button>

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

        {/* TABLE HEADER */}
        <div
          className="
            hidden md:grid
            grid-cols-5
            gap-4
            px-6 py-5
            border-b border-slate-100
            bg-slate-50/70
            text-xs font-bold uppercase tracking-wider text-slate-400
          "
        >
          <div>S.No</div>
          <div>Amount</div>
          <div>Status</div>
          <div>Date</div>
          <div className="text-right">Action</div>
        </div>

        {/* TABLE ROWS */}
        <div className="divide-y divide-slate-100">

          {paginatedRequests.map((item, index) => (

            <div
              key={item.id}
              className="
                grid grid-cols-1 md:grid-cols-5
                gap-4
                items-center
                px-6 py-5
                hover:bg-orange-50/40
                transition-all duration-300
              "
            >

              {/* S.NO */}
              <div>
                <p className="md:hidden text-xs text-slate-400 mb-1">
                  S.No
                </p>

                <h4 className="text-sm font-semibold text-slate-700">
                  {index + 1}
                </h4>
              </div>

              {/* AMOUNT */}
              <div>
                <p className="md:hidden text-xs text-slate-400 mb-1">
                  Amount
                </p>

                <h4 className="text-sm font-bold text-slate-800">
                  {item.amount}
                </h4>
              </div>

              {/* STATUS */}
              <div>
                <p className="md:hidden text-xs text-slate-400 mb-1">
                  Status
                </p>

                <div
                  className={`
                    inline-flex items-center
                    px-3 py-1.5
                    rounded-xl
                    text-xs font-bold
                    ${
                      item.status === "Approved"
                        ? "bg-emerald-100 text-emerald-600"
                        : item.status === "Pending"
                        ? "bg-yellow-100 text-yellow-600"
                        : "bg-red-100 text-red-600"
                    }
                  `}
                >
                  {item.status}
                </div>
              </div>

              {/* DATE */}
              <div>
                <p className="md:hidden text-xs text-slate-400 mb-1">
                  Date
                </p>

                <h4 className="text-sm text-slate-700">
                  {item.date}
                </h4>
              </div>

              {/* ACTION */}
              <div className="flex md:justify-end gap-2">

                <button
                  className="
                    w-9 h-9 rounded-xl
                    bg-blue-100
                    flex items-center justify-center
                    text-blue-600
                    hover:bg-blue-500
                    hover:text-white
                    transition-all
                  "
                >
                  <Eye size={17} />
                </button>

                <button
                  className="
                    w-9 h-9 rounded-xl
                    bg-red-100
                    flex items-center justify-center
                    text-red-600
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

        {/* PAGINATION */}
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={withdrawalData.length}
          perPage={perPage}
        />

      </div>

    </div>
  );
};

export default PaymentRequest;