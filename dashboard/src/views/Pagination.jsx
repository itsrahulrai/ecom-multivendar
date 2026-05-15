import React from "react";
import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

const Pagination = ({
    currentPage,
    setCurrentPage,
    totalItems,
    perPage,
}) => {

    const totalPages = Math.ceil(totalItems / perPage);

    return (
        <div
            className="
                flex flex-col lg:flex-row
                lg:items-center
                justify-between
                gap-4
                px-6 py-5
                border-t border-slate-100
                bg-white
            "
        >

            {/* Left */}
            <p className="text-sm text-slate-500">
                Showing{" "}
                <span className="font-bold text-slate-700">
                    {(currentPage - 1) * perPage + 1}
                </span>
                -
                <span className="font-bold text-slate-700">
                    {Math.min(currentPage * perPage, totalItems)}
                </span>{" "}
                from{" "}
                <span className="font-bold text-slate-700">
                    {totalItems}
                </span>{" "}
                entries
            </p>

            {/* Right */}
            <div className="flex items-center gap-2">

                {/* Prev */}
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                    className="
                        w-11 h-11 rounded-md
                        border border-slate-200
                        flex items-center justify-center
                        text-slate-500
                        hover:bg-slate-100
                        disabled:opacity-40
                        transition-all
                    "
                >
                    <ChevronLeft size={18} />
                </button>

                {/* Pages */}
                {[...Array(totalPages)].map((_, index) => (

                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`
                            w-11 h-11 rounded-md
                            text-sm font-bold
                            transition-all
                            ${currentPage === index + 1
                                ? "bg-gradient-to-r from-[#F54900] to-orange-500 text-white shadow-lg shadow-orange-200"
                                : "border border-slate-200 text-slate-600 hover:bg-slate-100"
                            }
                        `}
                    >
                        {index + 1}
                    </button>

                ))}

                {/* Next */}
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                    className="
                        w-11 h-11 rounded-md
                        border border-slate-200
                        flex items-center justify-center
                        text-slate-500
                        hover:bg-slate-100
                        disabled:opacity-40
                        transition-all
                    "
                >
                    <ChevronRight size={18} />
                </button>

            </div>

        </div>
    );
};

export default Pagination;