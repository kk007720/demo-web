interface EducationProps {
  className: string;
}

export function Education({ className }: EducationProps) {
  function renderTitle() {
    return (
      <div className="font-bold text-2xl">
        <span className="dark:text-green-500 text-primaryBgBtn">Edu</span>
        cation
      </div>
    );
  }
  return (
    <section className={className}>
      {renderTitle()}
      <div className="border-l border-mainBg-foreground h-[20rem] mt-4 relative">
        <div className="py-3 items-center  top-2 -left-5 absolute flex gap-2">
          <div className="border dark:border-green-700 border-primaryBgBtn rounded-xl bg-blockBg flex justify-center w-[5.5rem] max-h-[5%]">
            <span className="font-bold text-[10px]">2014 - 2019</span>
          </div>
          <div className="text-sm">國立臺北科技大學</div>
        </div>
        <div className="pt-14 pl-3">資訊工程系</div>
        <div className="py-3 items-center top-1/2 -left-5 absolute flex gap-2">
          <div className="border dark:border-green-700 border-primaryBgBtn rounded-xl bg-blockBg flex justify-center w-[5.5rem] max-h-[5%]">
            <span className="font-bold text-[10px]">2011 - 2014</span>
          </div>
          <div className="text-sm">臺北市立大安高級工業職業學校</div>
        </div>
        <div className="pt-32 pl-3">電機科</div>
      </div>
    </section>
  );
}
