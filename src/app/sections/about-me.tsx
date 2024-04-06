import Image from 'next/image';

export function AboutMe() {
  return (
    <section className="p-6 sm:p-8">
      <div className="font-bold text-2xl">
        <span className="dark:text-green-500 text-primaryBgBtn">Abo</span>
        utMe
      </div>
      <div className="sm:flex gap-3 relative">
        <div className=" items-center absolute -top-16 z-10 right-[35%] sm:hidden block">
          <Image
            src="/aboutMe.jpg"
            alt="aboutMe"
            width={480}
            height={360}
            priority
            objectFit="cover"
            className="rounded-xl max-h-[10rem] max-w-[7rem] shadow-box"
          ></Image>
        </div>
        <div className="bg-blockBg p-4 my-4 shadow-box sm:max-w-[80%] leading-8 tracking-wider dark:border-1 dark:border-primaryBgBtn relative">
          <div className="pt-[5rem] sm:pt-0">
            <p>
              『學習、挑戰』是我工作以來的精神糧食，突破新的技術，創造新的應用，看著使用者的使用給予回饋，
              就是我工作成就最大的來源。生成式AI的出現，使得系統不再單一不再只尋求效能的突破，可以將AI融合進任一系統，
              我身為一個FrontEnd
              Developer，除了與時俱進更新網頁技術的技能，也大量使用生成式AI，
              對我來說coding不再複雜，查詢Document不再耗時，
              應證指令不再繁瑣。雖然AI不一定提供最好的solution，但他給予你一個方向去優化這個solution。
            </p>
            <p></p>
          </div>
        </div>
        <div className="sm:flex items-center hidden ">
          <Image
            src="/aboutMe.jpg"
            alt="aboutMe"
            width={480}
            height={360}
            className="rounded-xl max-h-[20rem] max-w-[15rem]"
          ></Image>
        </div>
      </div>
    </section>
  );
}
