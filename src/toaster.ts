import Swal from 'sweetalert2';

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showCancelButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen(toast: HTMLElement) {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  }
});

const makeToast = (type: any, msg: any) => {
  Toast.fire({
    icon: type,
    title: msg
  })
};

export default makeToast;