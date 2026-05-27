import React, { useState } from "react";
import {
  ArrowLeft,
  Upload,
  Package,
  DollarSign,
  Layers3,
  FileText,
  BadgePercent,
  Boxes,
  Tag,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();

  /* FORM STATE */
  const [formData, setFormData] = useState({
    productName: "",
    brandName: "",
    category: "",
    stock: "",
    price: "",
    discount: "",
    description: "",
  });

  /* MULTIPLE IMAGE STATE */
  const [previews, setPreviews] = useState([]);

  /* HANDLE INPUT */
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* HANDLE MULTIPLE IMAGES */
  const handleImage = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 0) {
      const imageUrls = files.map((file) =>
        URL.createObjectURL(file)
      );

      setPreviews((prev) => [
        ...prev,
        ...imageUrls,
      ]);
    }
  };

  /* REMOVE IMAGE */
  const removeImage = (index) => {
    setPreviews(
      previews.filter((_, i) => i !== index)
    );
  };

  /* HANDLE SUBMIT */
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Product Added Successfully");
  };

  return (
    <div className="p-4 md:p-5 bg-slate-50 min-h-screen">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
            Add Product
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Create product details here
          </p>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="
            flex items-center gap-2
            px-4 h-11
            rounded-2xl
            border border-slate-200
            bg-white
            text-slate-700
            shadow-sm
            hover:bg-slate-100
            transition-all duration-300
          "
        >
          <ArrowLeft size={18} />
          Back
        </button>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <div
          className="
            bg-white
            rounded-[25px]
            border border-slate-100
            shadow-[0_10px_40px_rgba(0,0,0,0.05)]
            overflow-hidden
          "
        >
          {/* TOP */}
          <div className="px-6 py-4 border-b border-slate-100">
            <h3 className="text-lg font-bold text-slate-800">
              Product Information
            </h3>
          </div>

          {/* FORM BODY */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* PRODUCT NAME */}
            <div>
              <label className="text-sm font-semibold text-slate-600 mb-2 block">
                Product Name
              </label>

              <div className="relative">
                <Package
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  name="productName"
                  value={formData.productName}
                  onChange={handleChange}
                  placeholder="Enter product name"
                  className="
                    w-full h-12 pl-11 pr-4
                    rounded-2xl
                    border border-slate-200
                    outline-none
                    focus:border-orange-400
                  "
                />
              </div>
            </div>

            {/* BRAND NAME */}
            <div>
              <label className="text-sm font-semibold text-slate-600 mb-2 block">
                Brand Name
              </label>

              <div className="relative">
                <Tag
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  name="brandName"
                  value={formData.brandName}
                  onChange={handleChange}
                  placeholder="Enter brand name"
                  className="
                    w-full h-12 pl-11 pr-4
                    rounded-2xl
                    border border-slate-200
                    outline-none
                    focus:border-orange-400
                  "
                />
              </div>
            </div>

            {/* CATEGORY */}
            <div>
              <label className="text-sm font-semibold text-slate-600 mb-2 block">
                Category
              </label>

              <div className="relative">
                <Layers3
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="
                    w-full h-12 pl-11 pr-4
                    rounded-2xl
                    border border-slate-200
                    outline-none
                    bg-white
                    focus:border-orange-400
                  "
                >
                  <option value="">
                    Select Category
                  </option>

                  <option value="Electronics">
                    Electronics
                  </option>

                  <option value="Fashion">
                    Fashion
                  </option>

                  <option value="Furniture">
                    Furniture
                  </option>
                </select>
              </div>
            </div>

            {/* STOCK */}
            <div>
              <label className="text-sm font-semibold text-slate-600 mb-2 block">
                Product Stock
              </label>

              <div className="relative">
                <Boxes
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={handleChange}
                  placeholder="Enter stock quantity"
                  className="
                    w-full h-12 pl-11 pr-4
                    rounded-2xl
                    border border-slate-200
                    outline-none
                    focus:border-orange-400
                  "
                />
              </div>
            </div>

            {/* PRICE */}
            <div>
              <label className="text-sm font-semibold text-slate-600 mb-2 block">
                Product Price
              </label>

              <div className="relative">
                <DollarSign
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Enter price"
                  className="
                    w-full h-12 pl-11 pr-4
                    rounded-2xl
                    border border-slate-200
                    outline-none
                    focus:border-orange-400
                  "
                />
              </div>
            </div>

            {/* DISCOUNT */}
            <div>
              <label className="text-sm font-semibold text-slate-600 mb-2 block">
                Discount (%)
              </label>

              <div className="relative">
                <BadgePercent
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="number"
                  name="discount"
                  value={formData.discount}
                  onChange={handleChange}
                  placeholder="Enter discount"
                  className="
                    w-full h-12 pl-11 pr-4
                    rounded-2xl
                    border border-slate-200
                    outline-none
                    focus:border-orange-400
                  "
                />
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="md:col-span-2">
              <label className="text-sm font-semibold text-slate-600 mb-2 block">
                Description
              </label>

              <div className="relative">
                <FileText
                  size={18}
                  className="absolute left-4 top-5 text-slate-400"
                />

                <textarea
                  rows="4"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Write product description..."
                  className="
                    w-full pl-11 pr-4 py-4
                    rounded-2xl
                    border border-slate-200
                    outline-none
                    resize-none
                    focus:border-orange-400
                  "
                />
              </div>
            </div>

            {/* MULTIPLE IMAGE UPLOAD */}
            <div className="md:col-span-2">
              <label className="text-sm font-semibold text-slate-600 mb-3 block">
                Product Gallery
              </label>

              <label
                className="
                  flex flex-col items-center justify-center
                  border-2 border-dashed border-orange-300
                  rounded-3xl
                  p-8
                  cursor-pointer
                  bg-orange-50/40
                  hover:bg-orange-50
                  transition-all duration-300
                "
              >
                <Upload
                  size={34}
                  className="text-orange-500 mb-3"
                />

                <p className="text-sm text-slate-600">
                  Click to upload product images
                </p>

                <input
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleImage}
                />
              </label>

              {/* IMAGE PREVIEW */}
              {previews.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-4">
                  {previews.map((image, index) => (
                    <div
                      key={index}
                      className="
                        relative
                        group
                        w-28 h-28
                        rounded-2xl
                        overflow-hidden
                        border border-slate-200
                        shadow-sm
                      "
                    >
                      <img
                        src={image}
                        alt="Preview"
                        className="
                          w-full h-full
                          object-cover
                        "
                      />

                      <button
                        type="button"
                        onClick={() =>
                          removeImage(index)
                        }
                        className="
                          absolute top-2 right-2
                          w-7 h-7
                          rounded-full
                          bg-black/70
                          text-white
                          text-xs
                          opacity-0
                          group-hover:opacity-100
                          transition-all duration-300
                        "
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* FOOTER */}
          <div className="px-6 py-5 border-t border-slate-100 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="
                px-5 h-11
                rounded-2xl
                border border-slate-200
                text-slate-700
                font-semibold
                hover:bg-slate-100
                transition-all duration-300
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              className="
                px-7 h-11
                rounded-2xl
                bg-gradient-to-r from-[#F54900] to-orange-500
                text-white
                font-semibold
                shadow-lg shadow-orange-200
                hover:scale-105
                transition-all duration-300
              "
            >
              Save Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;