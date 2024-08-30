const GlowingChip = ({ children }) => {
  return (
    <div>
      <span className="text-sm relative z-10 mb-4 rounded-full border border-white/40 bg-white/20 px-3 py-1.5 text-white md:mb-0 flex gap-1 w-fit">
        {children}
        <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-gradient-to-r from-zinc-500/0 via-zinc-300 to-zinc-500/0" />
      </span>
    </div>
  );
};

export default GlowingChip;
