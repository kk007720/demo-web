import { CodeBlinking } from '@/components/code-blinking';
import { Button } from '@/components/ui/button';
import { Github, Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const SocialMediaSection = () => {
  return (
    <div className="flex flex-wrap gap-3 items-center">
      <Github className="w-5 h-5 cursor-pointer" />

      <Linkedin className="w-5 h-5 cursor-pointer" />

      <Instagram className="h-5 w-5 cursor-pointer" />
    </div>
  );
};

const QuickIntroSection = () => {
  return (
    <div className="my-4 tracking-wider leading-8">
      <span>
        我畢業於臺北科技大學資訊工程系，擁有
        <span className="font-bold">豐富的web開發經驗以及生成式AI應用經驗</span>
        ，包括使用PHP、
        <span className="font-bold">React.jS</span>
        <span className="font-bold">、TypeScript、Next.js</span>、Node.js 以及
        <span className="font-bold">企業級Open AI, Google Gemini</span>
        。曾任職於正隆公司開發多個系統，並於帆宣集團之宜眾股份有限公司負責開發台北市教育局智慧平台，
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
        Resume
      </Button>
      <Button
        variant={'primary'}
        className="border-2 rounded-2xl font-semibold border-white dark:border-white"
      >
        Contact
      </Button>
    </div>
  );
};

export function SimpleProfile() {
  return (
    <section className="p-6 sm:p-8 ">
      <div className="font-bold text-2xl sm:text-3xl mb-4">Kuo CHia Ming</div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-2 sm:gap-4">
        <Image
          src={'/personal.jpg'}
          alt="avatar"
          width={860}
          height={680}
          priority
          objectFit="cover"
          className="w-full h-auto shadow-box rounded-xl sm:min-h-[30rem] "
        />

        <div
          className={`bg-blockBg p-4 my-auto shadow-box text-sm sm:text-base min-h-[25rem] dark:border-1 dark:border-primaryBgBtn`}
        >
          <CodeBlinking />
          <div className="flex gap-4 my-4">
            <div className="font-bold text-2xl sm:text-3xl">Kuo Chia Ming</div>
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
