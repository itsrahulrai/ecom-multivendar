import Swal from "sweetalert2";

const SweetAlert = {
  confirm: async ({
    title = "Are you sure?",
    text = "You won't be able to revert this!",
    confirmButtonText = "Yes",
    cancelButtonText = "Cancel",
    icon = "warning",
    confirmButtonColor = "#ef4444",
    cancelButtonColor = "#64748b",
  } = {}) => {
    const result = await Swal.fire({
      title,
      text,
      icon,
      showCancelButton: true,
      confirmButtonText,
      cancelButtonText,
      confirmButtonColor,
      cancelButtonColor,
      reverseButtons: true,
      focusCancel: true,
      customClass: {
        popup: "rounded-3xl",
        confirmButton: "rounded-xl px-5 py-2",
        cancelButton: "rounded-xl px-5 py-2",
      },
    });

    return result.isConfirmed;
  },

  success: ({
    title = "Success!",
    text = "",
    timer = 1800,
  } = {}) => {
    return Swal.fire({
      icon: "success",
      title,
      text,
      timer,
      showConfirmButton: false,
    });
  },

  error: ({
    title = "Error!",
    text = "Something went wrong.",
  } = {}) => {
    return Swal.fire({
      icon: "error",
      title,
      text,
    });
  },

  loading: ({
    title = "Please wait...",
  } = {}) => {
    Swal.fire({
      title,
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  },

  close: () => Swal.close(),
};

export default SweetAlert;