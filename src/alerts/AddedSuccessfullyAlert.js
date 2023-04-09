import Swal from "sweetalert2";

export default function AddedSuccessfullyAlert() {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-right",
    iconColor: "green",
    customClass: {
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });

  Toast.fire({
    icon: "success",
    title: "Task Added Successfully",
  });
}
