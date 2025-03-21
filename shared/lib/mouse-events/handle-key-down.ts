export const handleKeyDown = (event: KeyboardEvent, onClose: () => void) => {
  if (event.key === 'Escape') {
    event.preventDefault();
    onClose();
  }
};
