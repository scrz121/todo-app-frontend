import { toast } from 'react-toastify';

const configure = () => ({
  autoClose: 1500,
  draggable: false,
});
export const toastSuccess = message => {
  toast.success(message, configure());
};

export const toastError = e => {
  if (typeof e === 'object') {
    toast.error(e.message, configure());
  } else {
    toast.error(e, configure());
  }
};
