export const validateProduct = (product) => {
  const errors = {};

  if (!product.name?.trim()) {
    errors.name = "El nombre es obligatorio";
  }

  if (!product.price || Number(product.price) <= 0) {
    errors.price = "El número debe ser mayor que 0";
  }

  if (!product.description?.trim()) {
    errors.description = "La descripción es obligatoria";
  }

  if (!product.file) {
    errors.file = "Debes seleccionar una imagen";
  }

  return errors;
};