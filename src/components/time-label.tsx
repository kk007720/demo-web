export default function TimeLabel({ text }: { text: string }) {
  return (
    <div className="border dark:border-green-700 border-primaryBgBtn rounded-xl bg-blockBg flex justify-center w-[6rem] max-h-[8%]">
      <span className="font-bold text-[10px]">{text}</span>
    </div>
  );
}
