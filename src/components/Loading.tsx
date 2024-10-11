export default function Loading() {
  return (
    <div className="fixed inset-0 z-10 bg-[#260f26] opacity-80">
      <div className="flex justify-center items-center min-h-screen">
        <span className="text-xl tracking-[1px] uppercase text-white animate-text">loading...</span>
      </div>
    </div>
  );
}
