import { AboutMe } from './sections/about-me';
import { Experience } from './sections/experience';
import { GetInTouch } from './sections/get-in-touch';
import { MyWork } from './sections/my-work';
import { SimpleProfile } from './sections/simple-profile';
import { Stats } from './sections/stats';
import { Education } from './sections/education';

export default function Home() {
  return (
    <div className="bg-mainBg text-mainBg-foreground rounded-xl text-sm sm:text-base max-w-[1280px]">
      <SimpleProfile />
      <AboutMe />
      <Stats />
      <MyWork />
      <div className="sm:flex gap-2 p-6 sm:p-8">
        <Education className="sm:w-1/2 w-full" />
        <Experience className="sm:w-1/2 w-full mt-4 sm:mt-0" />
      </div>
      <GetInTouch />
    </div>
  );
}
