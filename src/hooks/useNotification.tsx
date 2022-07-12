import { Notification } from "@components/common/Notifications";
import { toast } from "react-toastify";

const useNotification = () => {
  const showToast = (
    type: "critical" | "warning" | "success" | "error",
    message: string,
    duration?: number
  ) => {
    toast(<Notification type={type} message={message} />, {
      autoClose: duration || 5000,
    });
  };

  return { showToast };
};

export default useNotification;
