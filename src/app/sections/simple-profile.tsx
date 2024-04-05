import Image from 'next/image';
import { CodeBlinking } from '@/components/code-blinking';

export function SimpleProfile() {
  return (
    <section className="p-8 sm:p-10 ">
      <div className="font-bold text-2xl sm:text-3xl mb-4">郭家銘</div>
      <div className="flex w-full relative">
        <Image
          src={'/personal.jpg'}
          alt="avatar"
          width={600}
          height={250}
          className="w-auto h-auto shadow-box rounded-xl"
        />
        <div className="bg-blockBg h-[80%] max-h-[200px] w-[54%] max-w-[300px] p-12 my-auto shadow-box absolute sm:left-[55%] left-[65%] top-[10%] sm:max-w-[400px] md:left-[45%] md:max-w-[500px]">
          <CodeBlinking />
        </div>
      </div>
    </section>
  );
}
