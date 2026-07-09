import React, { useEffect, useState } from "react";
import CategoryDrawer from "./CategoryDrawer";
import {
  Trash2,
  Plus,
  Pencil,
} from "lucide-react";
import Pagination from "../Pagination";
import Search from "../../components/Search";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../store/Reducers/CategoryReducer";

const Category = () => {
  const dispatch = useDispatch();

const {
  categorys,
  pagination,
  successMessage,
} = useSelector((state) => state.category);

const perPage = 10;

  const [currentPage, setCurrentPage] = useState(1);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [editData, setEditData] = useState(null);
  const [search, setSearch] = useState("");

  // for Form data
    const [formData, setFormData] = useState({
      name: "",
      image: null,
      preview: "",
      status: "Active",
    });


  const imageHandle = (e) => {
  const file = e.target.files?.[0];

  if (!file) return;

  // Allow only images
  if (!file.type.startsWith("image/")) {
    alert("Please select a valid image.");
    return;
  }

  setFormData((prev) => ({
    ...prev,
    image: file,
    preview: URL.createObjectURL(file),
  }));
};


useEffect(() => {
  dispatch(
    getCategory({
      page: currentPage,
      perPage,
      searchValue: search,
    })
  );
}, [dispatch, currentPage, perPage, search]);

useEffect(() => {
  if (!successMessage) return;

  dispatch(
    getCategory({
      page: currentPage,
      perPage,
      searchValue: search,
    })
  );
}, [successMessage, currentPage, perPage, search, dispatch]);


 
  const handleOpenCreate = () => {
  setEditData(null);

  setFormData({
    name: "",
    image: null,
    preview: "",
    status: "Active",
  });

  setOpenDrawer(true);
};


const handleEdit = (category) => {
  setEditData(category);

  setFormData({
    name: category.name,
    image: null,
    preview: category.image,
    status: category.status,
  });

  setOpenDrawer(true);
};

  return (
    <div className="space-y-6 pr-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Categories</h2>
          <p className="text-sm text-slate-500 mt-1">
            Manage all product categories
          </p>
        </div>

        <button
          onClick={handleOpenCreate}
          className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#F54900] to-orange-500 text-white text-sm font-semibold shadow-lg shadow-orange-200 hover:scale-105 transition-all"
        >
          <Plus size={18} />
          New Category
        </button>
      </div>

      {/* Search */}
     <div className="flex justify-end">
        <Search
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          placeholder="Search category..."
        />
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-[20px] border border-white/60 bg-white/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
        {/* Header */}
        <div className="grid grid-cols-5 gap-4 px-6 py-5 border-b border-slate-100 bg-slate-50/70 text-xs font-bold uppercase tracking-wider text-slate-400">
          <div>S.NO</div>
          <div>Image</div>
          <div>Name</div>
          <div>Status</div>
          <div className="text-right">Action</div>
        </div>

        {/* Body */}
        <div className="divide-y divide-slate-100">
          {categorys?.length > 0 ? (
            categorys.map((category, index) => (
              <div
               key={category._id}
                className="grid grid-cols-5 gap-4 items-center px-6 py-5 hover:bg-orange-50/40 transition-all"
              >
                <div className="text-sm font-semibold text-slate-600">
                  {(currentPage - 1) * perPage + index + 1}
                </div>

                <div>
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-14 h-14 rounded-2xl object-cover border border-slate-200"
                  />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-700">
                    {category.name}
                  </h4>
                  <p className="text-xs text-slate-400">{category.slug}</p>
                </div>

                <div>
                  <button
                    className={`relative w-10 h-5 rounded-full transition-all ${
                      category.status === "Active"
                        ? "bg-emerald-500"
                        : "bg-slate-300"
                    }`}
                  >
                    <span
                      className={`absolute top-[2px] left-[2px] w-4 h-4 rounded-full bg-white transition-all ${
                        category.status === "Active"
                          ? "translate-x-5"
                          : ""
                      }`}
                    />
                  </button>
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => handleEdit(category)}
                    className="w-9 h-9 rounded-md bg-amber-100 flex items-center justify-center text-amber-600 hover:bg-amber-500 hover:text-white transition-all"
                  >
                    <Pencil size={16} />
                  </button>

                  <button
                    className="w-9 h-9 rounded-md bg-red-100 flex items-center justify-center text-red-600 hover:bg-red-500 hover:text-white transition-all"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="py-20 text-center text-slate-500">
              No categories found.
            </div>
          )}
        </div>

        {/* Pagination */}<Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalItems={pagination?.totalItems ?? 0}
            perPage={pagination?.perPage ?? perPage}
          />
      </div>

      {/* Drawer */}
     <CategoryDrawer
      openDrawer={openDrawer}
      setOpenDrawer={setOpenDrawer}
      editData={editData}
      formData={formData}
      setFormData={setFormData}
      imageHandle={imageHandle}
    />
    </div>
  );
};

export default Category
