let modalCount = 0;

export const incrementModal = () => {
  modalCount++;
  if (modalCount === 1) {
    document.body.classList.add("modal-wrapper-opened");
  }
};

export const decrementModal = () => {
  modalCount = Math.max(0, modalCount - 1);
  if (modalCount === 0) {
    document.body.classList.remove("modal-wrapper-opened");
  }
};
