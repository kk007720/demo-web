import Link from 'next/link';
import TimeLabel from '@/components/time-label';
import { Star } from 'lucide-react';

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
    <section className={`${className} flex flex-col`}>
      {renderTitle()}
      <div className="border-l border-mainBg-foreground mt-4 relative">
        <div className="flex sm:flex-row sm:items-center py-3 gap-2 absolute top-2 sm:top-auto sm:relative -left-5 sm:-left-5">
          <TimeLabel text="2014 - 2020" />
          <div className="text-sm">國立臺北科技大學</div>
        </div>
        <div className="pt-[3.5rem] sm:pt-0 pb-3 px-4">
          <p className="font-semibold">資訊工程系</p>
          <div className="text-sm leading-7 mt-1 text-justify ">
            在臺北科技大學實務導向的教學下，從大一大二開始基礎的c到物件導向c++。
            再到大三的資料庫設計，除了實作許多專題作品外，也培養與團隊溝通的能力。而在選修一門創業管理課程時，
            我因緣際會下接觸到了web，那時我獨自使用php,
            html開發了交友配對網站，除了在該門課中獲得97分高分，也獲得當時授課呂教授之邀請，擔任學弟妹之助教，
            也受邀至教授辦公室實習，與教授進行web開發。在大四呂教授推薦我與其他學弟妹參加
            <span className="font-semibold">
              108年度教育部補助高教深耕計畫跨校競賽以及明日之星菁英培訓計畫-既鴻海集團挹注獎學金之跨校智慧生活競賽
            </span>
            ， 我與團隊以交友配對網站2.0在多隻競爭隊伍中，
            <Star className="text-yellow-500/90 fill-current w-5 h-5 inline pb-0.5" />
            <span className="font-semibold">勇奪一等獎以及二等獎之殊榮</span>
            。從此時開始了我與web之緣分，除了工作上的應用學習，我也會利用自己的時間精進開發技術。
            <div className="text-blue-500 font-semibold pt-1 pb-3">
              <Link
                href={
                  'https://drive.google.com/file/d/1kcXofFBDX0P419lRPecr-KXUXC2okTn8/view?usp=sharing'
                }
                target="_blank"
              >
                <u>呂教授推薦函</u>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-mainBg-foreground mb-6 sm:mb-3"></div>
        <div className="flex sm:flex-row sm:items-center py-3 gap-2 absolute sm:relative -left-5 sm:-left-5 top-[70%] sm:top-auto">
          <TimeLabel text="2011 - 2014" />
          <div className="text-sm">臺北市立大安高級工業職業學校</div>
        </div>
        <div className="pt-[2.6rem] sm:pt-0 px-4 pb-4">
          <p className="font-semibold">電機科</p>
          <div className="text-sm leading-7 mt-1 text-justify">
            大安高工是臺北市職校龍頭，非常注重實務學習。培養我從小除了觀念上的釐清了解，也要實際動手去做實現、驗證。
            並於103學年度全國統一測驗時獲得628分（滿分700分），轉換科系跳脫電機，進入臺北科技大學資訊工程學系就讀。
          </div>
        </div>
      </div>
    </section>
  );
}
