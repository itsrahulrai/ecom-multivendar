import React, { useState } from "react";
import CategoryDrawer from "./CategoryDrawer";
import {
  Trash2,
  Plus,
  X,
  Pencil,
} from "lucide-react";
import Pagination from "../Pagination";


const categoriesData = [
  {
    id: "#CAT-101",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200",
    name: "Electronics",
    status: "Active",
  },
  {
    id: "#CAT-102",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=200",
    name: "Fashion",
    status: "Active",
  },
  {
    id: "#CAT-103",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=200",
    name: "Furniture",
    status: "Inactive",
  },
  {
    id: "#CAT-104",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=200",
    name: "Clothing",
    status: "Active",
  },
  {
    id: "#CAT-105",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=200",
    name: "Beauty",
    status: "Active",
  },
  {
    id: "#CAT-106",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200",
    name: "Accessories",
    status: "Inactive",
  },
  {
    id: "#CAT-107",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=200",
    name: "Shoes",
    status: "Active",
  },
  {
    id: "#CAT-108",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200",
    name: "Sports",
    status: "Active",
  },
  {
    id: "#CAT-109",
    image:
      "https://images.unsplash.com/photo-1511556820780-d912e42b4980?w=200",
    name: "Watches",
    status: "Inactive",
  },
  {
    id: "#CAT-110",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=200",
    name: "Bags",
    status: "Active",
  },
  {
    id: "#CAT-111",
    image:
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=200",
    name: "Jewelry",
    status: "Active",
  },
  {
    id: "#CAT-112",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=200",
    name: "Home Decor",
    status: "Inactive",
  },
];

const Category = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [editData, setEditData] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    status: "Active",
  });

  const perPage = 8;

  const paginatedCategories = categoriesData.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const handleOpenCreate = () => {
    setEditData(null);

    setFormData({
      name: "",
      image: "",
      status: "Active",
    });

    setOpenDrawer(true);
  };

  const handleEdit = (category) => {
    setEditData(category);

    setFormData({
      name: category.name,
      image: category.image,
      status: category.status,
    });

    setOpenDrawer(true);
  };

  return (
    <div className="space-y-6 pr-8">

      {/* HEADER */}
      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Categories
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Manage all product categories
          </p>
        </div>

        <button
          onClick={handleOpenCreate}
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
          New Category
        </button>

      </div>

      {/* TABLE */}
      <div
        className="
          overflow-hidden
          rounded-[20px]
          border border-white/60
          bg-white/80
          backdrop-blur-xl
          shadow-[0_20px_60px_rgba(0,0,0,0.04)]
        "
      >

        {/* Header */}
        <div
          className="
            grid grid-cols-5
            gap-4
            px-6 py-5
            border-b border-slate-100
            bg-slate-50/70
            text-xs font-bold uppercase tracking-wider text-slate-400
          "
        >
          <div>S.NO</div>
          <div>Image</div>
          <div>Name</div>
          <div>Status</div>
          <div className="text-right">Action</div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-slate-100">

          {paginatedCategories.map((category, index) => (

            <div
              key={index}
              className="
                grid grid-cols-5
                gap-4
                items-center
                px-6 py-5
                hover:bg-orange-50/40
                transition-all duration-300
              "
            >

              {/* S.NO */}
              <div className="text-sm font-semibold text-slate-600">
                {index + 1}
              </div>

              {/* Image */}
              <div>
                <img
                  src={category.image}
                  alt=""
                  className="
                    w-14 h-14
                    rounded-2xl
                    object-cover
                    border border-slate-200
                  "
                />
              </div>

              {/* Name */}
              <div>
                <h4 className="text-sm font-semibold text-slate-700">
                  {category.name}
                </h4>

                <p className="text-xs text-slate-400">
                  {category.id}
                </p>
              </div>

              {/* Status */}
              <div className="flex items-center">

                <button
                  className={`
                    relative w-10 h-5 rounded-full transition-all duration-300
                    ${
                      category.status === "Active"
                        ? "bg-emerald-500"
                        : "bg-slate-300"
                    }
                  `}
                >
                  <span
                    className={`
                      absolute top-[2px] left-[2px]
                      w-4 h-4 rounded-full bg-white shadow-sm
                      transition-all duration-300
                      ${
                        category.status === "Active"
                          ? "translate-x-5"
                          : "translate-x-0"
                      }
                    `}
                  />
                </button>

              </div>

              {/* Actions */}
              <div className="flex justify-end gap-2">

                <button
                  onClick={() => handleEdit(category)}
                  className="
                    w-9 h-9 rounded-md
                    bg-amber-100
                    flex items-center justify-center
                    text-amber-600
                    hover:bg-amber-500
                    hover:text-white
                    transition-all
                  "
                >
                  <Pencil size={16} />
                </button>

              

                <button
                  className="
                    w-9 h-9 rounded-md
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

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={categoriesData.length}
          perPage={perPage}
        />

      </div>

     {/* DRAWER */}
        <CategoryDrawer
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        editData={editData}
        formData={formData}
        setFormData={setFormData}
        />

      {/* Overlay */}
      {openDrawer && (
        <div
          onClick={() => setOpenDrawer(false)}
          className="
            fixed inset-0
            bg-black/30
            backdrop-blur-sm
            z-40
          "
        />
      )}

    </div>
  );
};

export default Category;