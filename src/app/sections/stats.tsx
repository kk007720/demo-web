import { Calendar, ShieldCheck } from 'lucide-react';

interface SingleStatProps {
  icon: React.ReactNode;
  text: string;
  subText: string;
  measure?: string;
}

const SingleStat = ({ icon, text, subText, measure }: SingleStatProps) => {
  return (
    <div className="bg-blockBg rounded-lg shadow-box py-4 font-bold px-2">
      <div className="flex flex-col justify-center items-center gap-2">
        {icon}
        <div>{text}</div>
        <div className="">
          {subText}
          <span className="text-xs">{measure}</span>
        </div>
      </div>
    </div>
  );
};

export function Stats() {
  function renderTitle() {
    return (
      <div className="font-bold text-2xl">
        <span className="dark:text-green-500 text-primaryBgBtn">Sta</span>
        ts
      </div>
    );
  }
  return (
    <section className="p-6 sm:p-8">
      {renderTitle()}
      <div className="grid grid-cols-4 gap-x-2 mt-4">
        <SingleStat
          icon={<Calendar />}
          text="Years of experience"
          subText={'5'}
          measure=" /年"
        />
        <SingleStat
          icon={<ShieldCheck />}
          text="Certificate"
          subText={'Introduce to python for data Science'}
          measure=" / 微軟, 2019"
        />
        <SingleStat
          icon={<ShieldCheck />}
          text="TOEIC"
          subText="710"
          measure=" /2022"
        />
        <SingleStat
          icon={<ShieldCheck />}
          text="GEPT"
          subText="Intermediate"
          measure={' /2012'}
        />
      </div>
    </section>
  );
}
