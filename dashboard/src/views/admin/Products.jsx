import React, { useState } from "react";
import {
  Trash2,
  Plus,
  Pencil,
  Search,
  SlidersHorizontal,
  Eye,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Pagination from "../Pagination";

const productsData = [
  {
    id: "#PRD-101",
    name: "iPhone 15 Pro",
    brand: "Apple",
    category: "Electronics",
    stock: 25,
    price: "$999",
    discount: "10%",
    status: true,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200",
  },
  {
    id: "#PRD-102",
    name: "Wireless Headphones",
    brand: "Sony",
    category: "Electronics",
    stock: 12,
    price: "$199",
    discount: "5%",
    status: false,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200",
  },
  {
    id: "#PRD-103",
    name: "Premium Jacket",
    brand: "Zara",
    category: "Fashion",
    stock: 40,
    price: "$120",
    discount: "15%",
    status: true,
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=200",
  },
];

const Products = () => {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] =
    useState(1);

  const [statusFilter, setStatusFilter] =
    useState("All");

  const [categoryFilter, setCategoryFilter] =
    useState("All");

  const perPage = 8;

  const filteredProducts = productsData.filter(
    (product) => {
      const matchStatus =
        statusFilter === "All"
          ? true
          : statusFilter === "Active"
          ? product.status
          : !product.status;

      const matchCategory =
        categoryFilter === "All"
          ? true
          : product.category === categoryFilter;

      return matchStatus && matchCategory;
    }
  );

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  return (
    <div className="space-y-6 pr-8">
      {/* HEADER */}
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">
            Products
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Manage all products from here
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* SEARCH */}
          <div
            className="
              flex items-center gap-2
              px-4 h-12
              rounded-2xl
              border border-slate-200
              bg-white
              shadow-sm
            "
          >
            <Search
              size={18}
              className="text-slate-400"
            />

            <input
              type="text"
              placeholder="Search product..."
              className="
                bg-transparent
                outline-none
                text-sm
                w-[180px]
              "
            />
          </div>

          {/* CATEGORY FILTER */}
          <div
            className="
              flex items-center gap-2
              px-4 h-12
              rounded-2xl
              border border-slate-200
              bg-white
              shadow-sm
            "
          >
            <SlidersHorizontal
              size={16}
              className="text-slate-400"
            />

            <select
              value={categoryFilter}
              onChange={(e) =>
                setCategoryFilter(e.target.value)
              }
              className="
                bg-transparent
                outline-none
                text-sm
                text-slate-600
              "
            >
              <option value="All">
                All Categories
              </option>

              <option value="Electronics">
                Electronics
              </option>

              <option value="Fashion">
                Fashion
              </option>
            </select>
          </div>

          {/* STATUS FILTER */}
          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
            className="
              h-12 px-4
              rounded-2xl
              border border-slate-200
              bg-white
              text-sm text-slate-600
              outline-none
              shadow-sm
            "
          >
            <option value="All">
              All Status
            </option>

            <option value="Active">
              Active
            </option>

            <option value="Inactive">
              Inactive
            </option>
          </select>

          {/* ADD BUTTON */}
          <button
            onClick={() =>
              navigate("/admin/dashboard/create/product")
            }
            className="
              flex items-center gap-2
              px-5 h-12
              rounded-2xl
              bg-gradient-to-r from-[#F54900] to-orange-500
              text-white
              text-sm font-semibold
              shadow-lg shadow-orange-200
              hover:scale-105
              transition-all duration-300
            "
          >
            <Plus size={18} />
            Add Product
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div
        className="
          overflow-x-auto
          rounded-[28px]
          border border-white/60
          bg-white/90
          backdrop-blur-xl
          shadow-[0_20px_60px_rgba(0,0,0,0.06)]
        "
      >
        {/* TABLE HEADER */}
        <div
          className="
            min-w-[1200px]
            grid grid-cols-10
            gap-4
            px-6 py-5
            border-b border-slate-100
            bg-slate-50
            text-xs font-bold uppercase tracking-wider text-slate-400
          "
        >
          <div>S.NO</div>
          <div>Product</div>
          <div>Name</div>
          <div>Brand</div>
          <div>Category</div>
          <div>Stock</div>
          <div>Price</div>
          <div>Discount</div>
          <div>Status</div>
          <div className="text-right">
            Action
          </div>
        </div>

        {/* TABLE BODY */}
        <div className="divide-y divide-slate-100 min-w-[1200px]">
          {paginatedProducts.map(
            (product, index) => (
              <div
                key={product.id}
                className="
                  grid grid-cols-10
                  gap-4
                  items-center
                  px-6 py-5
                  hover:bg-orange-50/40
                  transition-all duration-300
                "
              >
                {/* S.NO */}
                <div className="text-sm font-semibold text-slate-500">
                  0{index + 1}
                </div>

                {/* IMAGE */}
                <div>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      w-16 h-16
                      rounded-2xl
                      object-cover
                      border border-slate-200
                      shadow-sm
                    "
                  />
                </div>

                {/* NAME */}
                <div>
                  <h4 className="text-sm font-bold text-slate-700">
                    {product.name}
                  </h4>

                  <p className="text-xs text-slate-400 mt-1">
                    {product.id}
                  </p>
                </div>

                {/* BRAND */}
                <div>
                  <span className="text-sm font-semibold text-slate-700">
                    {product.brand}
                  </span>
                </div>

                {/* CATEGORY */}
                <div>
                  <span
                    className="
                      inline-flex items-center
                      px-3 py-1.5
                      rounded-xl
                      bg-blue-100
                      text-blue-700
                      text-xs font-semibold
                    "
                  >
                    {product.category}
                  </span>
                </div>

                {/* STOCK */}
                <div>
                  <span
                    className="
                      inline-flex items-center
                      px-3 py-1
                      rounded-xl
                      bg-emerald-100
                      text-emerald-700
                      text-xs font-semibold
                    "
                  >
                    {product.stock} pcs
                  </span>
                </div>

                {/* PRICE */}
                <div>
                  <h4 className="text-base font-bold text-orange-500">
                    {product.price}
                  </h4>
                </div>

                {/* DISCOUNT */}
                <div>
                  <span
                    className="
                      inline-flex items-center
                      px-3 py-1
                      rounded-xl
                      bg-red-100
                      text-red-600
                      text-xs font-semibold
                    "
                  >
                    {product.discount}
                  </span>
                </div>

                {/* STATUS */}
                <div>
                  <button
                    className={`
                      relative w-12 h-6 rounded-full transition-all duration-300
                      ${
                        product.status
                          ? "bg-emerald-500"
                          : "bg-slate-300"
                      }
                    `}
                  >
                    <span
                      className={`
                        absolute top-1 left-1
                        w-4 h-4 rounded-full bg-white
                        transition-all duration-300
                        ${
                          product.status
                            ? "translate-x-6"
                            : "translate-x-0"
                        }
                      `}
                    />
                  </button>
                </div>

                {/* ACTIONS */}
                <div className="flex justify-end gap-2">
                  {/* VIEW */}
                  <button
                    className="
                      w-12 h-8 rounded-md
                      bg-blue-100
                      flex items-center justify-center
                      text-blue-600
                      hover:bg-blue-500
                      hover:text-white
                      transition-all duration-300
                    "
                  >
                    <Eye size={17} />
                  </button>

                  {/* EDIT */}
                  <button
                    className="
                      w-12 h-8 rounded-md
                      bg-amber-100
                      flex items-center justify-center
                      text-amber-600
                      hover:bg-amber-500
                      hover:text-white
                      transition-all duration-300
                    "
                  >
                    <Pencil size={17} />
                  </button>

                  {/* DELETE */}
                  <button
                    className="
                      w-12 h-8 rounded-md
                      bg-red-100
                      flex items-center justify-center
                      text-red-600
                      hover:bg-red-500
                      hover:text-white
                      transition-all duration-300
                    "
                  >
                    <Trash2 size={17} />
                  </button>
                </div>
              </div>
            )
          )}
        </div>

        {/* PAGINATION */}
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={filteredProducts.length}
          perPage={perPage}
        />
      </div>
    </div>
  );
};

export default Products;