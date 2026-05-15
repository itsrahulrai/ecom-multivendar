import React, { useMemo, useState } from "react";
import {
    Search,
    Eye,
    ChevronLeft,
    ChevronRight,
    Download,
    CalendarDays,
    PackageCheck,
    Pencil,
    Trash2,
    Receipt,
    MoreHorizontal,
    X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Pagination from "../Pagination";

const ordersData = [
    {
        id: "#ORD-2045",
        customer: "Rahul Sharma",
        vendor: "Tech Store",
        product: "MacBook Pro M3",
        amount: "₹1,45,000",
        payment: "Paid",
        status: "Delivered",
        date: "12 May 2026",
    },
    {
        id: "#ORD-2046",
        customer: "Anjali Verma",
        vendor: "Fashion Hub",
        product: "Women Sneakers",
        amount: "₹4,200",
        payment: "Pending",
        status: "Pending",
        date: "11 May 2026",
    },
    {
        id: "#ORD-2047",
        customer: "Rohit Singh",
        vendor: "Gaming World",
        product: "Gaming Mouse",
        amount: "₹2,800",
        payment: "Paid",
        status: "Shipped",
        date: "10 May 2026",
    },
    {
        id: "#ORD-2048",
        customer: "Sneha Kapoor",
        vendor: "Mobile Planet",
        product: "iPhone 15 Pro",
        amount: "₹1,28,000",
        payment: "Refunded",
        status: "Cancelled",
        date: "09 May 2026",
    },
    {
        id: "#ORD-2049",
        customer: "Amit Kumar",
        vendor: "Laptop Hub",
        product: "Dell XPS 15",
        amount: "₹98,000",
        payment: "Paid",
        status: "Delivered",
        date: "08 May 2026",
    },
    {
        id: "#ORD-2050",
        customer: "Priya Singh",
        vendor: "Fashion Hub",
        product: "Apple Watch",
        amount: "₹42,000",
        payment: "Paid",
        status: "Shipped",
        date: "07 May 2026",
    },
];

const Orders = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [selectedOrder, setSelectedOrder] = useState(null);

    const navigate = useNavigate();

    const perPage = 5;

    const filteredOrders = useMemo(() => {
        return ordersData.filter((item) => {
            const matchesSearch =
                item.customer.toLowerCase().includes(searchValue.toLowerCase()) ||
                item.vendor.toLowerCase().includes(searchValue.toLowerCase()) ||
                item.product.toLowerCase().includes(searchValue.toLowerCase()) ||
                item.id.toLowerCase().includes(searchValue.toLowerCase());

            const matchesStatus =
                statusFilter === "All" || item.status === statusFilter;

            return matchesSearch && matchesStatus;
        });
    }, [searchValue, statusFilter]);

    const totalPages = Math.ceil(filteredOrders.length / perPage);

    const paginatedOrders = filteredOrders.slice(
        (currentPage - 1) * perPage,
        currentPage * perPage
    );

    return (
        <div className="space-y-6 pr-8">
            {/* ================= FILTER BAR ================= */}
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

                    {/* Left */}
                    <div className="flex flex-col lg:flex-row gap-4 flex-1">

                        {/* Search */}
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
                                placeholder="Search order, customer, vendor..."
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

                        {/* Status */}
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
                            <option value="All">All Status</option>
                            <option value="Delivered">Delivered</option>
                            <option value="Pending">Pending</option>
                            <option value="Shipped">Shipped</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>

                        {/* Date */}
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

                    {/* Right */}
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
                        Export Orders
                    </button>

                </div>

            </div>

            {/* ================= TABLE ================= */}
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

                {/* Header */}
                <div
                    className="
            grid grid-cols-8
            gap-4
            px-6 py-5
            border-b border-slate-100
            bg-slate-50/70
            text-xs font-bold uppercase tracking-wider text-slate-400
          "
                >
                    <div>Order</div>
                    <div>Customer</div>
                    <div>Vendor</div>
                    <div>Product</div>
                    <div>Amount</div>
                    <div>Payment</div>
                    <div>Status</div>
                    <div className="text-right">Action</div>
                </div>

                {/* Rows */}
                <div className="divide-y divide-slate-100">

                    {paginatedOrders.map((order, index) => (
                        <div
                            key={index}
                            className="
                grid grid-cols-8
                gap-4
                items-center
                px-6 py-5
                hover:bg-orange-50/40
                transition-all duration-300
              "
                        >

                            {/* Order */}
                            <div>
                                <h3 className="text-sm font-bold text-slate-800">
                                    {order.id}
                                </h3>

                                <p className="text-xs text-slate-400 mt-1">
                                    {order.date}
                                </p>
                            </div>

                            {/* Customer */}
                            <div className="flex items-center gap-3">
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-700">
                                        {order.customer}
                                    </h4>

                                    <p className="text-xs text-slate-400">
                                        Customer
                                    </p>
                                </div>

                            </div>

                            {/* Vendor */}
                            <div>
                                <h4 className="text-sm font-semibold text-slate-700">
                                    {order.vendor}
                                </h4>

                                <p className="text-xs text-slate-400">
                                    Verified Vendor
                                </p>
                            </div>

                            {/* Product */}
                            <div>
                                <h4 className="text-sm font-semibold text-slate-700">
                                    {order.product}
                                </h4>

                                <p className="text-xs text-slate-400">
                                    Electronics
                                </p>
                            </div>

                            {/* Amount */}
                            <div className="font-bold text-slate-800">
                                {order.amount}
                            </div>

                            {/* Payment */}
                            <div>
                                <div
                                    className={`
                    inline-flex items-center
                    px-3 py-1.5
                    rounded-xl
                    text-xs font-bold
                    ${order.payment === "Paid"
                                            ? "bg-emerald-100 text-emerald-600"
                                            : order.payment === "Pending"
                                                ? "bg-yellow-100 text-yellow-600"
                                                : "bg-red-100 text-red-600"
                                        }
                  `}
                                >
                                    {order.payment}
                                </div>
                            </div>

                            {/* Status */}
                            <div>
                                <div
                                    className={`
                    inline-flex items-center
                    px-3 py-1.5
                    rounded-xl
                    text-xs font-bold
                    ${order.status === "Delivered"
                                            ? "bg-emerald-100 text-emerald-600"
                                            : order.status === "Pending"
                                                ? "bg-yellow-100 text-yellow-600"
                                                : order.status === "Shipped"
                                                    ? "bg-blue-100 text-blue-600"
                                                    : "bg-red-100 text-red-600"
                                        }
                  `}
                                >
                                    {order.status}
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex justify-end gap-2">

                                {/* View */}
                                <button
                                    onClick={() =>
                                        navigate(
                                            `/admin/dashboard/orders/${encodeURIComponent(order.id)}`
                                        )
                                    }
                                    className="
                                        w-8 h-8 rounded-md
                                        bg-blue-100
                                        flex items-center justify-center
                                        text-blue-600
                                        hover:bg-blue-500
                                        hover:text-white
                                        transition-all">
                                    <Eye size={17} />
                                </button>

                                {/* Delete */}
                                <button
                                    className="
                                    w-8 h-8 rounded-md
                                    bg-red-100
                                    flex items-center justify-center
                                    text-red-600
                                    hover:bg-red-500
                                    hover:text-white
                                    transition-all
                                ">
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
                    totalItems={filteredOrders.length}
                    perPage={perPage}
                />
            </div>

        </div>
    );
};

export default Orders;