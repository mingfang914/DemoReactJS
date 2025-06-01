import React from "react";

function ConfirmDelete({ todo, onConfirm, onCancel }) {
  return (
    <div className="confirm-delete">
      <p>
        Bạn có chắc chắn muốn xóa công việc: <strong>{todo.text}</strong>?
      </p>
      <button onClick={onConfirm} className="delete-confirm">
        Xác nhận
      </button>
      <button onClick={onCancel} className="delete-cancel">
        Hủy
      </button>
    </div>
  );
}

export default ConfirmDelete;
