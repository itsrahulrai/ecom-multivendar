import React, { useMemo, useState } from "react";
import {
  Search,
  Eye,
  Trash2,
  Download,
  CalendarDays,
  Plus,
} from "lucide-react";
import Pagination from "../Pagination";

const sellersData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
    name: "Rahul Sharma",
    shopName: "Tech Store",
    paymentStatus: "Paid",
    email: "rahul@gmail.com",
    status: "Active",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    name: "Anjali Verma",
    shopName: "Fashion Hub",
    paymentStatus: "Pending",
    email: "anjali@gmail.com",
    status: "Inactive",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200",
    name: "Rohit Singh",
    shopName: "Gaming World",
    paymentStatus: "Paid",
    email: "rohit@gmail.com",
    status: "Active",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
    name: "Sneha Kapoor",
    shopName: "Mobile Planet",
    paymentStatus: "Pending",
    email: "sneha@gmail.com",
    status: "Active",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=200",
    name: "Amit Kumar",
    shopName: "Laptop Hub",
    paymentStatus: "Paid",
    email: "amit@gmail.com",
    status: "Inactive",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200",
    name: "Priya Singh",
    shopName: "Beauty Store",
    paymentStatus: "Paid",
    email: "priya@gmail.com",
    status: "Active",
  },
];

const Sellers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const perPage = 5;

  const filteredSellers = useMemo(() => {
    return sellersData.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.shopName.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.email.toLowerCase().includes(searchValue.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ||
        item.paymentStatus === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [searchValue, statusFilter]);

  const paginatedSellers = filteredSellers.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <div className="space-y-6 pr-0 xl:pr-8">

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Sellers
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Manage all sellers information
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
          <Plus size={18} />
          Add Seller
        </button>

      </div>

      {/* FILTER */}
      <div
        className="
          rounded-[20px]
          border border-white/60
          bg-white/80
          backdrop-blur-xl
          p-5
          shadow-[0_10px_40px_rgba(0,0,0,0.04)]
        "
      >

        <div className="flex flex-col xl:flex-row gap-4 justify-between">

          {/* LEFT */}
          <div className="flex flex-col lg:flex-row gap-4 flex-1">

            {/* SEARCH */}
            <div
              className="
                flex items-center gap-3
                rounded-2xl
                border border-slate-200
                bg-slate-50
                px-4 py-3
                flex-1
              "
            >

              <Search size={18} className="text-slate-400" />

              <input
                type="text"
                placeholder="Search seller..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="
                  w-full bg-transparent
                  outline-none
                  text-sm
                  placeholder:text-slate-400
                "
              />

            </div>

            {/* STATUS */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="
                rounded-2xl
                border border-slate-200
                bg-slate-50
                px-5 py-3
                text-sm
                text-slate-600
                outline-none
              "
            >
              <option value="All">All Payment</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
            </select>

            {/* DATE */}
            <button
              className="
                flex items-center gap-2
                rounded-2xl
                border border-slate-200
                bg-slate-50
                px-5 py-3
                text-sm font-medium text-slate-600
              "
            >
              <CalendarDays size={16} />
              Date Range
            </button>

          </div>

          {/* EXPORT */}
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
            grid grid-cols-7
            gap-4
            px-6 py-5
            border-b border-slate-100
            bg-slate-50/70
            text-xs font-bold uppercase tracking-wider text-slate-400
          "
        >
          <div>S.No</div>
          <div>Image</div>
          <div>Name</div>
          <div>Shop Name</div>
          <div>Payment</div>
          <div>Email</div>
          <div className="text-right">Action</div>
        </div>

        {/* TABLE ROWS */}
        <div className="divide-y divide-slate-100">

          {paginatedSellers.map((seller, index) => (

            <div
              key={seller.id}
              className="
                grid grid-cols-7
                gap-4
                items-center
                px-6 py-5
                hover:bg-orange-50/40
                transition-all duration-300
              "
            >

              {/* S.NO */}
              <div className="text-sm font-semibold text-slate-700">
                {index + 1}
              </div>

              {/* IMAGE */}
              <div>
                <img
                  src={seller.image}
                  alt=""
                  className="
                    w-14 h-14
                    rounded-2xl
                    object-cover
                    border border-slate-200
                  "
                />
              </div>

              {/* NAME */}
              <div>
                <h4 className="text-sm font-semibold text-slate-700">
                  {seller.name}
                </h4>

                <p className="text-xs text-slate-400">
                  Seller
                </p>
              </div>

              {/* SHOP NAME */}
              <div>
                <h4 className="text-sm font-semibold text-slate-700">
                  {seller.shopName}
                </h4>

                <p className="text-xs text-slate-400">
                  Verified Shop
                </p>
              </div>

              {/* PAYMENT */}
              <div>
                <div
                  className={`
                    inline-flex items-center
                    px-3 py-1.5
                    rounded-xl
                    text-xs font-bold
                    ${
                      seller.paymentStatus === "Paid"
                        ? "bg-emerald-100 text-emerald-600"
                        : "bg-yellow-100 text-yellow-600"
                    }
                  `}
                >
                  {seller.paymentStatus}
                </div>
              </div>

              {/* EMAIL */}
              <div className="text-sm text-slate-600 break-all">
                {seller.email}
              </div>

              {/* ACTION */}
              <div className="flex justify-end gap-2">

                {/* VIEW */}
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

                {/* DELETE */}
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
          totalItems={filteredSellers.length}
          perPage={perPage}
        />

      </div>

    </div>
  );
};

export default Sellers;