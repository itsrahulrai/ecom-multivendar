import { Search as SearchIcon } from "lucide-react";

const Search = ({
  value,
  onChange,
  placeholder = "Search...",
  className = "",
}) => {
  return (
    <div className={`relative w-full max-w-sm ${className}`}>
      <SearchIcon
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          pl-11
          pr-4
          py-3
          rounded-2xl
          border
          border-slate-200
          bg-white
          text-sm
          text-slate-700
          placeholder:text-slate-400
          outline-none
          transition-all
          focus:border-orange-500
          focus:ring-2
          focus:ring-orange-200
        "
      />
    </div>
  );
};

export default Search