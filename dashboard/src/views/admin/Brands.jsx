import React, { useEffect, useState } from "react";
import BrandDrawer from "./BrandDrawer";
import { Trash2, Plus, Pencil } from "lucide-react";
import Pagination from "../Pagination";
import Search from "../../components/Search";
import { useDispatch, useSelector } from "react-redux";
import { getBrand, brandDelete } from "../../store/Reducers/BrandReducer";
import ConfirmModal from "../../components/confirmModal/ConfirmModal";

const Brand = () => {
  const dispatch = useDispatch();

  const {
    brands,
    pagination,
    successMessage,
  } = useSelector((state) => state.brand);

  const perPage = 10;

  const [currentPage, setCurrentPage] = useState(1);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [editData, setEditData] = useState(null);
  const [search, setSearch] = useState("");

  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    image: null,
    preview: "",
    status: "Active",
  });

  const imageHandle = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      image: file,
      preview: URL.createObjectURL(file),
    }));
  };

  useEffect(() => {
    dispatch(
      getBrand({
        page: currentPage,
        perPage,
        searchValue: search,
      })
    );
  }, [dispatch, currentPage, search]);

  useEffect(() => {
    if (!successMessage) return;

    dispatch(
      getBrand({
        page: currentPage,
        perPage,
        searchValue: search,
      })
    );
  }, [successMessage]);

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

  const handleEdit = (brand) => {
    setEditData(brand);

    setFormData({
      name: brand.name,
      image: null,
      preview: brand.image,
      status: brand.status,
    });

    setOpenDrawer(true);
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setDeleteModal(true);
  };

  const confirmDelete = async () => {
    setDeleteLoading(true);

    try {
      await dispatch(brandDelete(deleteId)).unwrap();
      setDeleteModal(false);
      setDeleteId(null);
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <div className="space-y-6 pr-8">

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Brands</h2>
          <p className="text-sm text-slate-500">
            Manage all ecommerce brands
          </p>
        </div>

        <button
          onClick={handleOpenCreate}
          className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#F54900] to-orange-500 text-white"
        >
          <Plus size={18} />
          New Brand
        </button>
      </div>

      <div className="flex justify-end">
        <Search
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          placeholder="Search brand..."
        />
      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow">
        <div className="grid grid-cols-5 px-6 py-4 bg-slate-100 font-semibold">
          <div>S.NO</div>
          <div>Logo</div>
          <div>Brand Name</div>
          <div>Status</div>
          <div className="text-right">Action</div>
        </div>

        {brands?.map((brand, index) => (
          <div
            key={brand._id}
            className="grid grid-cols-5 items-center px-6 py-4 border-b"
          >
            <div>{(currentPage - 1) * perPage + index + 1}</div>

            <div>
              <img
                src={brand.image}
                alt={brand.name}
                className="w-14 h-14 rounded-xl object-cover"
              />
            </div>

            <div>
              <h4 className="font-semibold">{brand.name}</h4>
              <p className="text-xs text-gray-400">{brand.slug}</p>
            </div>

            <div>
              <span
                className={`px-3 py-1 rounded-full text-xs ${
                  brand.status === "Active"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {brand.status}
              </span>
            </div>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => handleEdit(brand)}
                className="w-9 h-9 rounded-md bg-amber-100 flex items-center justify-center"
              >
                <Pencil size={16} />
              </button>

              <button
                onClick={() => handleDelete(brand._id)}
                className="w-9 h-9 rounded-md bg-red-100 flex items-center justify-center"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}

        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={pagination?.totalItems ?? 0}
          perPage={pagination?.perPage ?? perPage}
        />
      </div>

      <BrandDrawer
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        editData={editData}
        formData={formData}
        setFormData={setFormData}
        imageHandle={imageHandle}
      />

      <ConfirmModal
        open={deleteModal}
        loading={deleteLoading}
        title="Delete Brand"
        message="Are you sure you want to delete this brand?"
        onClose={() => {
          setDeleteModal(false);
          setDeleteId(null);
        }}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default Brand;