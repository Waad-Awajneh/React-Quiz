import Swal from "sweetalert2";

export default async function deleteAlert() {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "error",
    showCancelButton: true,
    confirmButtonColor: "red",
    cancelButtonColor: "#9415c6",
    confirmButtonText: "Yes, delete it!",
  });
  console.log(result.isConfirmed);
  return result.isConfirmed;
}
