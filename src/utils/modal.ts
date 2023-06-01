export const openModal = (id: string) => {
  const ele = document.getElementById(id) as HTMLDialogElement;
  if (!ele) return;
  ele.showModal();
};
