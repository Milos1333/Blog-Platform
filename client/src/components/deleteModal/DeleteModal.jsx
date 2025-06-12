import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import "./deleteModal.style.css";

const DeleteModal = ({ visible, setVisible, onConfirm, title, message }) => {
  return (
    <Dialog
      header={title}
      className="delete-modal-component"
      visible={visible}
      style={{ width: "350px" }}
      onHide={() => setVisible(false)}
      footer={
        <div className="delete-modal-buttons">
          <Button
            label="No"
            icon="pi pi-times"
            onClick={() => setVisible(false)}
            className="p-button-text"
          />
          <Button
            label="Yes"
            icon="pi pi-check"
            onClick={() => {
              onConfirm();
              setVisible(false);
            }}
            autoFocus
          />
        </div>
      }
    >
      <p>{message}</p>
    </Dialog>
  );
};

export default DeleteModal;
