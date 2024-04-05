import Image from 'next/image';
import { CodeBlinking } from '@/components/code-blinking';

export function SimpleProfile() {
  return (
    <section className="p-8 sm:p-10 ">
      <div className="font-bold text-2xl sm:text-3xl mb-4">郭家銘</div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 sm:gap-4">
        <Image
          src={'/personal.jpg'}
          alt="avatar"
          width={600}
          height={250}
          className="w-auto h-auto shadow-box rounded-xl"
        />
        {/* 使用group作为父容器的类以便于子元素根据父容器宽度变化应用样式 */}
        <div
          className={`bg-blockBg p-4 my-auto shadow-box text-sm sm:text-base`}
        >
          <CodeBlinking />
        </div>
      </div>
    </section>
  );
}
