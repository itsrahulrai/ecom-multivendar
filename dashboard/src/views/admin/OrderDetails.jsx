import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  Download,
  PackageCheck,
  Truck,
  CheckCircle2,
  Clock3,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  BadgeCheck,
} from "lucide-react";

const OrderDetails = () => {
  const navigate = useNavigate();

  const order = {
    id: "ORD-2045",
    customer: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "+91 9876543210",
    address: "Sector 18, Gurgaon, India",
    vendor: "Tech Store",
    product: "MacBook Pro M3",
    amount: "₹1,45,000",
    payment: "Paid",
    status: "Delivered",
    date: "12 Sept, 2027",
    deliveryDate: "15 Sept, 2027",
  };

  return (
    <div className="min-h-screen">

      {/* ================= MAIN WRAPPER ================= */}
      <div
        className="
          rounded-[20px]
          border border-white/70
          bg-white/80
          backdrop-blur-xl
          overflow-hidden
          shadow-[0_25px_80px_rgba(15,23,42,0.08)]
        "
      >

        {/* ================= HEADER ================= */}
        <div
          className="
            flex flex-col xl:flex-row
            xl:items-center
            justify-between
            gap-5
            px-6 xl:px-8
            py-6
            border-b border-slate-100
            bg-white/60
          "
        >

          {/* LEFT */}
          <div className="flex items-center gap-4">

            <button
              onClick={() => navigate(-1)}
              className="
                w-12 h-12 rounded-2xl
                bg-slate-100
                flex items-center justify-center
                text-slate-700
                hover:bg-slate-200
                transition-all
              "
            >
              <ChevronLeft size={20} />
            </button>

            <div>

              <div className="flex items-center gap-3 flex-wrap">

                <h1 className="text-3xl font-black text-slate-800">
                  Order Details
                </h1>

                <div
                  className="
                    px-4 py-1.5 rounded-full
                    bg-emerald-100
                    text-emerald-600
                    text-xs font-bold
                    flex items-center gap-1
                  "
                >
                  <BadgeCheck size={14} />
                  Delivered
                </div>

              </div>

              <p className="text-slate-400 mt-2">
                #{order.id} • {order.date}
              </p>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-3 flex-wrap">

            <button
              className="
                px-5 py-3 rounded-2xl
                border border-slate-200
                bg-white
                text-sm font-semibold
                text-slate-700
                hover:bg-slate-100
                transition-all
              "
            >
              Print
            </button>

            <button
              className="
                flex items-center gap-2
                px-5 py-3 rounded-2xl
                bg-gradient-to-r
                from-[#F54900]
                to-orange-500
                text-white
                text-sm font-bold
                shadow-lg shadow-orange-200
                hover:scale-[1.03]
                transition-all
              "
            >
              <Download size={17} />
              Download Invoice
            </button>

          </div>

        </div>

        {/* ================= BODY ================= */}
        <div className="p-6 xl:p-8">

          {/* ================= TOP STATS ================= */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">

            {/* CARD */}
            <div
              className="
                relative overflow-hidden
                rounded-[30px]
                bg-gradient-to-br
                from-cyan-100 to-cyan-50
                border border-cyan-200
                p-6
              "
            >

              <div className="absolute -right-5 -top-5 w-24 h-24 bg-cyan-200/40 rounded-full blur-2xl" />

              <div className="relative z-10">

                <p className="text-sm font-semibold text-slate-500">
                  Order Date
                </p>

                <h2 className="text-2xl font-black text-slate-800 mt-3">
                  {order.date}
                </h2>

              </div>

            </div>

            {/* CARD */}
            <div
              className="
                relative overflow-hidden
                rounded-[30px]
                bg-gradient-to-br
                from-pink-100 to-pink-50
                border border-pink-200
                p-6
              "
            >

              <div className="absolute -right-5 -top-5 w-24 h-24 bg-pink-200/40 rounded-full blur-2xl" />

              <div className="relative z-10">

                <p className="text-sm font-semibold text-slate-500">
                  Total Items
                </p>

                <h2 className="text-2xl font-black text-slate-800 mt-3">
                  03 pcs
                </h2>

              </div>

            </div>

            {/* CARD */}
            <div
              className="
                relative overflow-hidden
                rounded-[30px]
                bg-gradient-to-br
                from-green-100 to-green-50
                border border-green-200
                p-6
              "
            >

              <div className="absolute -right-5 -top-5 w-24 h-24 bg-green-200/40 rounded-full blur-2xl" />

              <div className="relative z-10">

                <p className="text-sm font-semibold text-slate-500">
                  Delivery Date
                </p>

                <h2 className="text-2xl font-black text-slate-800 mt-3">
                  {order.deliveryDate}
                </h2>

              </div>

            </div>

            {/* CARD */}
            <div
              className="
                relative overflow-hidden
                rounded-[30px]
                bg-gradient-to-br
                from-orange-100 to-orange-50
                border border-orange-200
                p-6
              "
            >

              <div className="absolute -right-5 -top-5 w-24 h-24 bg-orange-200/40 rounded-full blur-2xl" />

              <div className="relative z-10">

                <p className="text-sm font-semibold text-slate-500">
                  Payment Status
                </p>

                <h2 className="text-2xl font-black text-emerald-600 mt-3">
                  Paid
                </h2>

              </div>

            </div>

          </div>

          {/* ================= MAIN GRID ================= */}
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 mt-6">

            {/* ================= LEFT SIDE ================= */}
            <div className="xl:col-span-8 space-y-6">

              {/* ================= PRODUCTS ================= */}
              <div
                className="
                  rounded-[32px]
                  border border-slate-200
                  bg-white
                  overflow-hidden
                "
              >

                {/* HEADER */}
                <div
                  className="
                    flex items-center justify-between
                    px-6 py-5
                    border-b border-slate-100
                  "
                >

                  <h2 className="text-2xl font-black text-slate-800">
                    Ordered Products
                  </h2>

                  <div
                    className="
                      px-4 py-2 rounded-2xl
                      bg-orange-100
                      text-[#F54900]
                      text-sm font-bold
                    "
                  >
                    3 Products
                  </div>

                </div>

                {/* TABLE */}
                <div className="overflow-x-auto">

                  <table className="w-full">

                    <thead className="bg-slate-50">

                      <tr>

                        <th className="px-6 py-4 text-left text-xs font-bold uppercase text-slate-400">
                          Product
                        </th>

                        <th className="px-6 py-4 text-left text-xs font-bold uppercase text-slate-400">
                          Vendor
                        </th>

                        <th className="px-6 py-4 text-left text-xs font-bold uppercase text-slate-400">
                          Qty
                        </th>

                        <th className="px-6 py-4 text-left text-xs font-bold uppercase text-slate-400">
                          Price
                        </th>

                        <th className="px-6 py-4 text-left text-xs font-bold uppercase text-slate-400">
                          Status
                        </th>

                      </tr>

                    </thead>

                    <tbody>

                      {[1, 2, 3].map((item, index) => (
                        <tr
                          key={index}
                          className="
                            border-t border-slate-100
                            hover:bg-orange-50/40
                            transition-all
                          "
                        >

                          <td className="px-6 py-5">

                            <div className="flex items-center gap-4">

                              <div
                                className="
                                  w-14 h-14 rounded-2xl
                                  bg-orange-100
                                  flex items-center justify-center
                                "
                              >
                                <PackageCheck
                                  size={24}
                                  className="text-[#F54900]"
                                />
                              </div>

                              <div>

                                <h4 className="font-bold text-slate-800">
                                  MacBook Pro M3
                                </h4>

                                <p className="text-sm text-slate-400">
                                  Premium Electronics
                                </p>

                              </div>

                            </div>

                          </td>

                          <td className="px-6 py-5">

                            <div>

                              <h4 className="font-semibold text-slate-700">
                                Tech Store
                              </h4>

                              <p className="text-xs text-slate-400">
                                Verified Vendor
                              </p>

                            </div>

                          </td>

                          <td className="px-6 py-5 font-semibold text-slate-700">
                            1
                          </td>

                          <td className="px-6 py-5 font-black text-slate-800">
                            ₹1,45,000
                          </td>

                          <td className="px-6 py-5">

                            <div
                              className="
                                inline-flex items-center
                                px-3 py-1.5 rounded-xl
                                bg-emerald-100
                                text-emerald-600
                                text-xs font-bold
                              "
                            >
                              Delivered
                            </div>

                          </td>

                        </tr>
                      ))}

                    </tbody>

                  </table>

                </div>

              </div>

              {/* ================= CUSTOMER INFO ================= */}
              <div
                className="
                  rounded-[30px]
                  border border-slate-200
                  bg-white
                  p-6
                "
              >

                <h2 className="text-2xl font-black text-slate-800">
                  Customer Information
                </h2>

                <div className="flex flex-col lg:flex-row lg:items-center gap-6 mt-7">
                  {/* INFO */}
                  <div className="flex-1">

                    <h3 className="text-2xl font-black text-slate-800">
                      Rahul Sharma
                    </h3>

                    <p className="text-slate-400 mt-1">
                      Premium Customer
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">

                      <div className="flex items-center gap-3">

                        <div
                          className="
                            w-10 h-10 rounded-xl
                            bg-slate-100
                            flex items-center justify-center
                          "
                        >
                          <Mail size={17} className="text-slate-500" />
                        </div>

                        <div>

                          <p className="text-xs text-slate-400">
                            Email
                          </p>

                          <h4 className="text-sm font-semibold text-slate-700">
                            rahul@gmail.com
                          </h4>

                        </div>

                      </div>

                      <div className="flex items-center gap-3">

                        <div
                          className="
                            w-10 h-10 rounded-xl
                            bg-slate-100
                            flex items-center justify-center
                          "
                        >
                          <Phone size={17} className="text-slate-500" />
                        </div>

                        <div>

                          <p className="text-xs text-slate-400">
                            Phone
                          </p>

                          <h4 className="text-sm font-semibold text-slate-700">
                            +91 9876543210
                          </h4>

                        </div>

                      </div>

                      <div className="flex items-center gap-3">

                        <div
                          className="
                            w-10 h-10 rounded-xl
                            bg-slate-100
                            flex items-center justify-center
                          "
                        >
                          <MapPin size={17} className="text-slate-500" />
                        </div>

                        <div>

                          <p className="text-xs text-slate-400">
                            Address
                          </p>

                          <h4 className="text-sm font-semibold text-slate-700">
                            Gurgaon, India
                          </h4>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            

            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="xl:col-span-4">

              <div
                className="
                  rounded-[32px]
                  bg-gradient-to-br
                  from-yellow-200
                  to-yellow-100
                  border border-yellow-300
                  p-6
                  sticky top-5
                  shadow-lg
                "
              >

                <div className="flex items-center justify-between">

                  <h2 className="text-2xl font-black text-slate-800">
                    Order Summary
                  </h2>

                  <div
                    className="
                      w-12 h-12 rounded-2xl
                      bg-white/70
                      flex items-center justify-center
                    "
                  >
                    <CreditCard
                      size={22}
                      className="text-slate-700"
                    />
                  </div>

                </div>

                <div className="space-y-5 mt-8">

                  {[
                    ["Sub Total", "₹1,40,000"],
                    ["VAT (5%)", "₹4,000"],
                    ["Discount", "-₹4,000"],
                    ["Shipping", "₹500"],
                    ["Tax", "₹0"],
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >

                      <span className="text-slate-600">
                        {item[0]}
                      </span>

                      <span className="font-bold text-slate-800">
                        {item[1]}
                      </span>

                    </div>
                  ))}

                </div>

                <div
                  className="
                    border-t border-yellow-300
                    mt-7 pt-7
                    flex items-center justify-between
                  "
                >

                  <span className="text-2xl font-black text-slate-800">
                    Total
                  </span>

                  <span className="text-4xl font-black text-[#F54900]">
                    ₹1,45,000
                  </span>

                </div>

                <button
                  className="
                    w-full mt-8
                    py-4 rounded-2xl
                    bg-slate-900
                    text-white font-bold
                    hover:scale-[1.02]
                    transition-all
                  "
                >
                  Pay with Razorpay
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default OrderDetails;