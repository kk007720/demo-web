interface ExperienceProps {
  className: string;
}

export function Experience({ className }: ExperienceProps) {
  function renderTitle() {
    return (
      <div className="font-bold text-2xl">
        <span className="dark:text-green-500 text-primaryBgBtn">Exp</span>
        erience
      </div>
    );
  }
  return (
    <section className={className}>
      {renderTitle()}

      <div className="border-l border-mainBg-foreground h-[20rem] mt-4 relative">
        <div className="py-3 items-center  top-2 -left-5 absolute flex   gap-2">
          <div className="border dark:border-green-700 border-primaryBgBtn rounded-xl bg-blockBg flex justify-center w-[5.5rem] max-h-[5%]">
            <span className="font-bold text-[10px]">2022 - Present</span>
          </div>
          <div className="text-sm">宜眾資訊股份有限公司</div>
        </div>

        <div className="py-3 items-center  top-1/2 -left-5 absolute flex   gap-2">
          <div className="border dark:border-green-700 border-primaryBgBtn rounded-xl bg-blockBg flex justify-center w-[5.5rem] max-h-[5%]">
            <span className="font-bold text-[10px]">2020 - 2022</span>
          </div>
          <div className="text-sm">正隆股份有限公司</div>
        </div>
      </div>
    </section>
  );
}
