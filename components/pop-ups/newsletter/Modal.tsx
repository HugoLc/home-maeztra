import "./styles.css";

export function Modal({ isOpen, onClose, children }: any) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose} aria-label="fechar">
          Fechar
        </button>
        {children}
      </div>
    </div>
  );
}
