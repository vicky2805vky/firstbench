const Tag = ({ text, color }) => {
  return (
    <div
      className={`!w-fit rounded-full ${color} px-2 py-1 text-[6px] text-white`}
    >
      {text}
    </div>
  );
};

export default Tag;
