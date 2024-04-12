import { CodeBlinking } from '@/components/code-blinking';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const SocialMediaSection = () => {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      <Link href="https://github.com/kk007720/demo-web" target="_blank">
        <Github className="w-5 h-5 cursor-pointer" />
      </Link>

      <Link
        href="https://www.linkedin.com/in/chia-ming-kuo-9bb963157/"
        target="_blank"
      >
        <Linkedin className="w-5 h-5 cursor-pointer" />
      </Link>
    </div>
  );
};

const QuickIntroSection = () => {
  return (
    <div className="my-4 tracking-wider leading-8 font-mono text-justify">
      <span>
        畢業於國立臺北科技大學資訊工程系，擁有
        <span className="font-bold">豐富的web開發經驗以及生成式AI應用經驗</span>
        ，包括使用PHP、Node.js
        <span className="font-bold">、React.jS、Next.js</span>
        <span className="font-bold">、TypeScript</span>以及
        <span className="font-bold">企業級Open AI, Google Gemini</span>
        。於任職期間曾開發過ERP、員工福利系統、倉儲系統Barcode等等，並於2022年起負責開發台北市教育局AI智慧平台，
        <span className="font-bold">擅長解決問題並創新應用AI solutions。</span>
      </span>
    </div>
  );
};

const ButtonSection = () => {
  return (
    <div className="flex gap-3 justify-center">
      <Button
        variant={'primary'}
        className="border-2 border-yellow-900 dark:border-green-800 font-semibold"
      >
        <Link
          href={
            'https://drive.google.com/file/d/1AIklMFxzr2Y14rcz5RMQ8x9Wh6GAsZKC/view?usp=sharing'
          }
          target="_blank"
        >
          Resume
        </Link>
      </Button>
      <Button
        variant={'primary'}
        className="border-2 rounded-2xl font-semibold border-white dark:border-white"
      >
        <Link href={'mailto:kk007720@gmail.com'} target="_blank">
          Contact
        </Link>
      </Button>
    </div>
  );
};

export function SimpleProfile() {
  return (
    <section className="p-6 sm:p-8 ">
      <h1 className="font-bold text-2xl sm:text-3xl mb-4">Kuo Chia Ming</h1>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 sm:gap-4">
        <Image
          src={'/personal.jpg'}
          alt="avatar"
          width={860}
          height={680}
          priority
          className="w-full h-auto shadow-box rounded-xl sm:min-h-[30rem] "
        />

        <div
          className={`bg-blockBg p-4 my-auto shadow-box text-sm sm:text-base min-h-[25rem] dark:border-1 dark:border-primaryBgBtn`}
        >
          <CodeBlinking />
          <div className="flex gap-4 my-4">
            <h1 className="font-bold text-2xl sm:text-3xl">Kuo Chia Ming</h1>
            <SocialMediaSection />
          </div>

          <QuickIntroSection />
          <ButtonSection />
          <div className="my-4 gap-x-2 flex">
            新聞作品介紹：
            <Link
              href="https://www.youtube.com/watch?v=gM9okb0Rj8g"
              target="_blank"
              className="text-blue-600 hover:underline font-bold"
            >
              台視新聞
            </Link>
            <Link
              href="https://youtu.be/W75F9Ac4xD8?si=UMivWcBSsBcD8Uzp"
              target="_blank"
              className="text-blue-600 hover:underline font-bold"
            >
              短片
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
