import "./custom-dialog.css";
export default function CustomDialog({ ref, children }) {
  return (
    <dialog ref={ref}>
      <button
        className="close"
        onClick={(e) => e.currentTarget.parentElement.close()}
      >
        X
      </button>
      {children}
    </dialog>
  );
}
