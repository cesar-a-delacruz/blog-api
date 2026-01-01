export default function CustomDialog({ ref, children }) {
  return (
    <dialog ref={ref}>
      <button onClick={(e) => e.currentTarget.parentElement.close()}>X</button>
      {children}
    </dialog>
  );
}
