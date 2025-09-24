// Abrir modal
document.getElementById("btnExcluir").addEventListener("click", () => {
  document.getElementById("modal").style.display = "flex";
});

// Cancelar exclusão
document.getElementById("cancelar").addEventListener("click", () => {
  document.getElementById("modal").style.display = "none";
});

// Confirmar exclusão
document.getElementById("confirmar").addEventListener("click", () => {
  alert("Conta excluída com sucesso!");
  document.getElementById("modal").style.display = "none";
});
