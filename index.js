const button = document.querySelector(".btn-modal");

const backdrop = document.querySelector(".backdrop ");

button.addEventListener("click", toggleModal);

backdrop.addEventListener("click", (e) => {

  const target = e.target.closest(".modal-close");
  if (!target) {
    return;
  }
  toggleModal();
});

function toggleModal() {
  backdrop.classList.toggle("is-open");
}
