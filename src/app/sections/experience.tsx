import { Star } from 'lucide-react';
import TimeLabel from '@/components/time-label';
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

  function renderEzoomSection() {
    return (
      <>
        <div className="flex sm:flex-row sm:items-center py-3 gap-2 absolute top-2 sm:top-auto sm:relative -left-5 sm:-left-5">
          <TimeLabel text="2022 - Present" />
          <div className="text-sm">宜眾資訊股份有限公司(帆宣集團)</div>
        </div>
        <div className="pt-[3.5rem] sm:pt-0 pb-3 px-4">
          <p className="font-semibold">前端工程師</p>
          <div className="text-sm leading-7 mt-1 text-justify ">
            剛入職時維護台北市教育局酷學習系統，使用Angular, TypeScript,
            php來做維護，確保系統能正常運作以及DB備份排程的撰寫。
            不久酷學習改版因應臺北市政府需求導入生成式AI，我加入了開發團隊並擔任ＦＥ，
            該系統使用React, Next來撰寫開發，我與另一位ＦＥ負責所有前端頁面，
            AI應用從企劃、提案實作POC到實現由主管指派我全權負責處理，我獨自survey突破我一開始並不熟悉的技術，使用Node.js
            + LangChain來導入生成式AI，
            <span className="font-semibold">
              實作自動批改作文給予即時feedBack, 學生小幫手chatBot,
              多模型對抗/AI老師精準出題等等已上線功能。
            </span>
            2024起進行新案員工教育訓練lms系統，團隊決定使用新Next版本，並加入TypeScript，並使用開源元件如shadcn/ui等等，
            加速元件的定義以及設計，更著重在效能以及程式碼維護。
            於2023年考績除了直屬主管，本單位處長還特別給予肯定
            <Star className="text-yellow-500/90 fill-current w-5 h-5 inline pb-0.5" />
            <span className="font-semibold">91分之Excellent級距高分。</span>
            該案由於是政府的案子，通常合理的時程是訓練，不合理的時程是磨練，
            <span className="font-semibold">
              我能高度配合勝任各個重要功能以及任務。
            </span>
            讓公司能滿足客戶之需求，為公司提供提案量能。
          </div>
          <div className="p-3">
            <div>
              <span className="font-semibold">Frontend:</span> React, Next.js,
              Typescript, Tailwind
            </div>
            <div>
              <span className="font-semibold">Backend:</span> Node.js, LangChain
            </div>
          </div>
        </div>
      </>
    );
  }

  function renderChungLongSection() {
    return (
      <>
        <div className="flex sm:flex-row sm:items-center py-3 gap-2 absolute sm:relative -left-5 sm:-left-5 top-[57%] sm:top-auto">
          <TimeLabel text="2020 - 2022" />
          <div className="text-sm">正隆股份有限公司</div>
        </div>
        <div className="pt-[2.6rem] sm:pt-0 px-4 pb-4">
          <p className="font-semibold">全端工程師</p>
          <div className="text-sm leading-7 mt-1 text-justify">
            於在職期間開發數個公司內部系統，包括翻新用了60年舊版的全公司EIP，由我使用php,
            html, bootStrap等技術一條龍來撰寫新版EIP， 該專案上線後獲得主管肯定
            榮獲
            <Star className="text-yellow-500/90 fill-current w-5 h-5 inline pb-0.5" />
            <span className="font-semibold">2020年度新人晉升</span>
            。也有開發過硬體與軟體、SAP資料整合之barcode槍之倉儲系統，
            該專案榮獲
            <Star className="text-yellow-500/90 fill-current w-5 h-5 inline pb-0.5" />
            <span className="font-semibold">
              2021年度優良改善案例競賽第二名
            </span>
            。員工福利系統也是我在職作品之一，榮獲
            <Star className="text-yellow-500/90 fill-current w-5 h-5 inline pb-0.5" />
            <span className="font-semibold">嘉獎兩隻</span>
            。除了在工作上盡心盡力負責任，與同事之間的相處也非常融洽，連續兩年由單位主管指派擔任部門尾牙籌辦總招以及主持人。
            原任職於開發維運課，並於2022調至新創規劃課。
          </div>
          <div className="p-3">
            <div>
              <span className="font-semibold">Frontend:</span> JavaScript, Html,
              BootStrap, TinyButStrong,
            </div>
            <div>
              <span className="font-semibold">Backend:</span> Php, PostgreSql
            </div>
          </div>
        </div>
      </>
    );
  }

  function renderSeedSection() {
    return (
      <>
        <div className="flex sm:flex-row sm:items-center py-3 gap-2 absolute sm:relative -left-5 sm:-left-5 top-[57%] sm:top-auto">
          <TimeLabel text="2019 - 2020" />
          <div className="text-sm">喜德教育股份有限公司</div>
        </div>
        <div className="pt-[2.6rem] sm:pt-0 px-4 pb-4">
          <p className="font-semibold">Steam教育授課老師</p>
          <div className="text-sm leading-7 mt-1 text-justify">
            於大學兼職授課老師，培養表達能力、場控以及規劃課程設計能力，
            教授對象為幼兒園至小學（10至25名/班）學生。
          </div>
        </div>
      </>
    );
  }

  function renderWekonSection() {
    return (
      <>
        <div className="flex sm:flex-row sm:items-center py-3 gap-2 absolute sm:relative -left-5 sm:-left-5 top-[57%] sm:top-auto">
          <TimeLabel text="2019 - 2020" />
          <div className="text-sm">威肯資訊管理顧問股份有限公司</div>
        </div>
        <div className="pt-[2.6rem] sm:pt-0 px-4 pb-4">
          <p className="font-semibold">全端工程師（實習）</p>
          <div className="text-sm leading-7 mt-1 text-justify">
            於北科大創業管理課程，由教授推薦邀請至實習工作、研究開發。
            主要開發Web環景導覽系統、3D模型、Unity場景遊戲開發。並參與由教授主持之THREE.JS、A-Frame框架3D進修課程。
          </div>
          <div className="p-3">
            <div>
              <span className="font-semibold">Frontend:</span> Html, css,
              JavaScript
            </div>
            <div>
              <span className="font-semibold">Backend:</span> Php, MySql,
              Three.js
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <section className={`${className} flex flex-col`}>
      {renderTitle()}
      <div className="border-l border-mainBg-foreground mt-4 relative">
        {renderEzoomSection()}
        <div className="border-t border-mainBg-foreground mb-6 sm:mb-3"></div>
        {renderChungLongSection()}
        <div className="border-t border-mainBg-foreground mb-6 sm:mb-3"></div>
        {renderSeedSection()}
        <div className="border-t border-mainBg-foreground mb-6 sm:mb-3"></div>
        {renderWekonSection()}
      </div>
    </section>
  );
}
