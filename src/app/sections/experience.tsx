import { Star } from 'lucide-react';
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
    <section className={`${className} flex flex-col`}>
      {renderTitle()}
      <div className="border-l border-mainBg-foreground mt-4 relative">
        <div className="flex sm:flex-row sm:items-center py-3 gap-2 absolute top-2 sm:top-auto sm:relative -left-5 sm:-left-5">
          <div className="border dark:border-green-700 border-primaryBgBtn rounded-xl bg-blockBg flex justify-center w-[5.5rem] max-h-[5%]">
            <span className="font-bold text-[10px]">2022 - Present</span>
          </div>
          <div className="text-sm">宜眾資訊股份有限公司(帆宣集團)</div>
        </div>
        <div className="pt-[3.5rem] sm:pt-0 pb-3 px-4">
          <p className="font-semibold">前端工程師</p>
          <div className="text-sm leading-7 mt-1 text-justify ">
            剛入職時維護台北市教育局酷學習系統，使用Angular,
            TypeScript來做維護，確保web能正常運作。
            不久後酷學習改版導入生成式AI，我加入了開發團隊並擔任ＦＥ，
            該系統使用React, Next來撰寫開發，我與另一位ＦＥ負責前端頁面，
            AI應用企劃到實現都是由我統一負責處理，我使用Node.js +
            langChain技術來串接Azure生成式AI， 實作自動批改作文給予即時feedBack,
            學生小幫手chatBot, 多模型對抗/AI老師精準出題等等已上線功能。
            於2023年考績由本單位處長給予肯定
            <Star className="text-yellow-500/90 fill-current w-5 h-5 inline pb-0.5" />
            91分之Excellent級距高分。
            該案由於是政府的案子，通常合理的時程是訓練，不合理的時程是磨練，我能高度配合勝任各個重要功能以及任務。
            讓公司能盡量滿足客戶之需求，以及能獨自survey應用技術等等，為公司提供提案之籌碼。
          </div>
        </div>
        <div className="border-t border-mainBg-foreground mb-6 sm:mb-3"></div>
        <div className="flex sm:flex-row sm:items-center py-3 gap-2 absolute sm:relative -left-5 sm:-left-5 top-[57%] sm:top-auto">
          <div className="border dark:border-green-700 border-primaryBgBtn rounded-xl bg-blockBg flex justify-center w-[5.5rem] max-h-[5%]">
            <span className="font-bold text-[10px]">2020 - 2022</span>
          </div>
          <div className="text-sm">正隆股份有限公司</div>
        </div>
        <div className="pt-[2.6rem] sm:pt-0 px-4 pb-4">
          <p className="font-semibold">網頁工程師</p>
          <div className="text-sm leading-7 mt-1 text-justify">
            於在職期間開發數個公司系統，包括翻新用了60年舊版的EIP，由我使用php,
            html, bootStrap等技術一條龍來撰寫新版EIP， 該專案上線後獲得主管肯定
            榮獲
            <Star className="text-yellow-500/90 fill-current w-5 h-5 inline pb-0.5" />
            年度新人晉升。也有開發過硬體與軟體結合之barcode槍之倉儲系統，
            該專案榮獲
            <Star className="text-yellow-500/90 fill-current w-5 h-5 inline pb-0.5" />
            2021年度優良改善案例競賽第二名。員工福利系統也是我在職作品之一，榮獲
            <Star className="text-yellow-500/90 fill-current w-5 h-5 inline pb-0.5" />
            嘉獎兩隻。除了在工作上盡心盡力負責任，在與同事之間的相處我也非常融入，連續兩年由單位主管指派我擔任部門尾牙籌碼以及主持人。
            原任職於開發維運課，並於2022調至新創規劃課
          </div>
        </div>
      </div>
    </section>
  );
}
