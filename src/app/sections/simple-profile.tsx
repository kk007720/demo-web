import Image from 'next/image';
import { CodeBlinking } from '@/components/code-blinking';

export function SimpleProfile() {
  return (
    <section className="">
      <div className="font-bold text-2xl sm:text-3xl mb-4 p-8 sm:p-10 ">
        郭家銘
      </div>
      <div className="flex w-full relative">
        <Image
          src={'/personal.jpg'}
          alt="avatar"
          width={600}
          height={250}
          className="w-auto h-auto shadow-box rounded-xl"
        />
        {/* 使用group作为父容器的类以便于子元素根据父容器宽度变化应用样式 */}
        <div
          className={`bg-blockBg h-[80%] max-h-[30rem] w-[50%] max-w-[43rem] p-12 my-auto shadow-box fixed left-[45%] top-[21%]`}
        >
          <CodeBlinking />
        </div>
      </div>
    </section>
  );
}
