import { AboutMe } from './sections/about-me';
import { Experience } from './sections/experience';
import { GetInTouch } from './sections/get-in-touch';
import { MyWork } from './sections/my-work';
import { SimpleProfile } from './sections/simple-profile';
import { Stats } from './sections/stats';

export default function Home() {
  return (
    <div className="bg-mainBg text-mainBg-foreground rounded-xl">
      <SimpleProfile />
      <AboutMe />
      <Stats />
      <MyWork />
      <Experience />
      <GetInTouch />
    </div>
  );
}
