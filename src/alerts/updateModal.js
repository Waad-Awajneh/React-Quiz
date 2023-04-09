// import { saveEdit } from "../redux/reducers/TasksReducer/action";
import Swal from "sweetalert2";

export const updateTaskModal = (userTask) => (dispatch) => {
  let okValue;
  Swal.fire({
    title: "Edit Task information",
    html:
      `<input type="text" id="swal-input1" class="swal2-input" value="${userTask.title}"  >` +
      `<input type="date" id="swal-input2" class="swal2-input"  value="${userTask.deadline}" >` +
      `<textarea id="swal-input3" class="swal2-input">${userTask.description}</textarea>` +
      `<select name="Task-Priority" id="swal-input4" class="swal2-input">
        <option value="Critical">Critical</option>
        <option value="Normal" selected>Normal</option>
        <option value="Low-priority">Low priority</option>
      </select>`,
    focusConfirm: false,
    preConfirm: () => {
      return [
        (okValue = document.querySelector(".swal2-confirm.swal2-styled")),
        // (okValue.onclick = dispatch(saveEdit(userTask))),
      ];
    },
  });
};
