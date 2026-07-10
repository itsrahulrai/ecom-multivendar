import React from "react";
import { Loader2, Trash2, X } from "lucide-react";

const ConfirmModal = ({
  open,
  onClose,
  onConfirm,
  loading = false,
  title = "Delete Category?",
  message = "This action cannot be undone.",
}) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-[360px] rounded-3xl bg-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]">

        {/* Close */}
        <button
          onClick={onClose}
          disabled={loading}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
        >
          <X size={16} />
        </button>

        {/* Content */}
        <div className="px-7 pt-8 pb-6 text-center">

          {/* Icon */}
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600 shadow-lg shadow-red-500/20">
              <Trash2 size={18} className="text-white" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-lg font-semibold text-slate-900">
            {title}
          </h2>

          {/* Description */}
          <p className="mt-2 text-sm leading-6 text-slate-500">
            {message}
          </p>

          {/* Buttons */}
          <div className="mt-7 flex gap-3">

            <button
              onClick={onClose}
              disabled={loading}
              className="flex-1 rounded-xl border border-slate-200 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              onClick={onConfirm}
              disabled={loading}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-600 py-2.5 text-sm font-medium text-white transition hover:bg-red-700 disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 size={15} className="animate-spin" />
                  Deleting...
                </>
              ) : (
                <>
                  <Trash2 size={15} />
                  Delete
                </>
              )}
            </button>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ConfirmModal;