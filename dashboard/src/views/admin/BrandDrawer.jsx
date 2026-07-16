import React, { useEffect } from "react";
import { X, Plus, Loader2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  brandAdd,
  brandUpdate,
  clearMessages,
} from "../../store/Reducers/BrandReducer";
import toast from "react-hot-toast";

const BrandDrawer = ({
  openDrawer,
  setOpenDrawer,
  editData,
  formData,
  setFormData,
  imageHandle,
}) => {
  const INITIAL_FORM = {
    name: "",
    status: "Active",
    image: null,
    preview: "",
  };

  const dispatch = useDispatch();

  const { loader, successMessage, errorMessage } = useSelector(
    ({ brand }) => brand
  );

  const submitBrand = (e) => {
    e.preventDefault();

    if (editData) {
      dispatch(
        brandUpdate({
          id: editData._id,
          formData,
        })
      );
    } else {
      dispatch(brandAdd(formData));
    }
  };

  useEffect(() => {
    if (!successMessage && !errorMessage) return;

    successMessage
      ? toast.success(successMessage)
      : toast.error(errorMessage);

    if (successMessage) {
      setOpenDrawer(false);
      setFormData(INITIAL_FORM);
    }

    dispatch(clearMessages());
  }, [successMessage, errorMessage, dispatch, setOpenDrawer, setFormData]);

  return (
    <>
      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-screen w-[420px] bg-white shadow-2xl border-l border-slate-200 transition-all duration-300 ${
          openDrawer ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <div>
            <h3 className="text-2xl font-bold text-slate-800">
              {editData ? "Edit" : "Create"} Brand
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              Manage brand details
            </p>
          </div>

          <button
            onClick={() => setOpenDrawer(false)}
            className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center hover:bg-red-100 hover:text-red-500 transition-all"
          >
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={submitBrand} className="p-6 space-y-6">
          {/* Logo */}
          <div>
            <label className="text-sm font-semibold text-slate-700">
              Brand Logo
            </label>

            <div className="mt-4 flex justify-center">
              <div className="relative group">
                <div className="w-32 h-32 rounded-3xl overflow-hidden border-2 border-dashed border-orange-300 bg-slate-100 flex items-center justify-center">
                  {formData.preview ? (
                    <img
                      src={formData.preview}
                      alt="Brand"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center text-slate-400">
                      <span className="text-xs mt-2">Upload Logo</span>
                    </div>
                  )}
                </div>

                <label className="absolute bottom-2 right-2 w-10 h-10 rounded-xl bg-gradient-to-r from-[#F54900] to-orange-500 text-white flex items-center justify-center shadow-lg cursor-pointer">
                  <Plus size={18} />

                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={imageHandle}
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Brand Name */}
          <div>
            <label className="text-sm font-semibold text-slate-700">
              Brand Name
            </label>

            <input
              type="text"
              placeholder="Enter brand name"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
              className="w-full mt-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-orange-400"
            />
          </div>

          {/* Status */}
          <div>
            <label className="text-sm font-semibold text-slate-700">
              Status
            </label>

            <select
              value={formData.status}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  status: e.target.value,
                }))
              }
              className="w-full mt-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-orange-400"
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={() => setOpenDrawer(false)}
              className="flex-1 py-3 rounded-2xl border border-slate-200 text-slate-600 font-semibold"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loader}
              className={`flex-1 py-3 rounded-2xl text-white font-semibold transition-all ${
                loader
                  ? "bg-orange-300 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#F54900] to-orange-500"
              }`}
            >
              {loader ? (
                <Loader2 className="mx-auto animate-spin" size={20} />
              ) : editData ? (
                "Update Brand"
              ) : (
                "Create Brand"
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Overlay */}
      {openDrawer && (
        <div
          onClick={() => setOpenDrawer(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
        />
      )}
    </>
  );
};

export default BrandDrawer;