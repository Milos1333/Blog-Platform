import { createContext, useRef, useContext } from "react";
import { Toast } from "primereact/toast";
import "./toast.style.css";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const toast = useRef(null);

  const show = (severity, summary, detail, life = 2000) => {
    toast.current.show({
      severity,
      summary,
      detail,
      life,
      className: `custom-toast ${severity}`,
    });
  };

  return (
    <ToastContext.Provider value={{ show }}>
      <Toast ref={toast} position="bottom-right" />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
