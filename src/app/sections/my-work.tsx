import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const workingMap = [
  {
    title: '總公司EIP系統',
    description:
      '●整合使用60年的舊版EIP●本人一條龍撰寫●整合各系統快速簽核提示●紀錄各item員工點擊及使用頻率⭐榮獲年度新人晉升',
    imageUrl: ['/project-1-eipMain.png'],
    resumeCakeUrl: 'https://www.cakeresume.com/portfolios/eip-bec092',
  },
  {
    title: '總公司EIP系統',
    description:
      '●整合使用60年的舊版EIP●本人一條龍撰寫●整合各系統快速簽核提示●紀錄各item員工點擊及使用頻率⭐榮獲年度新人晉升',
    imageUrl: ['/project-1-eipMain.png'],
    resumeCakeUrl: 'https://www.cakeresume.com/portfolios/eip-bec092',
  },
  {
    title: '總公司EIP系統',
    description:
      '●整合使用60年的舊版EIP●本人一條龍撰寫●整合各系統快速簽核提示●紀錄各item員工點擊及使用頻率⭐榮獲年度新人晉升',
    imageUrl: ['/project-1-eipMain.png'],
    resumeCakeUrl: 'https://www.cakeresume.com/portfolios/eip-bec092',
  },
  {
    title: '總公司EIP系統',
    description:
      '●整合使用60年的舊版EIP●本人一條龍撰寫●整合各系統快速簽核提示●紀錄各item員工點擊及使用頻率⭐榮獲年度新人晉升',
    imageUrl: ['/project-1-eipMain.png'],
    resumeCakeUrl: 'https://www.cakeresume.com/portfolios/eip-bec092',
  },
  {
    title: '總公司EIP系統',
    description:
      '●整合使用60年的舊版EIP●本人一條龍撰寫●整合各系統快速簽核提示●紀錄各item員工點擊及使用頻率⭐榮獲年度新人晉升',
    imageUrl: ['/project-1-eipMain.png'],
    resumeCakeUrl: 'https://www.cakeresume.com/portfolios/eip-bec092',
  },
];

export function MyWork() {
  function renderTitle() {
    return (
      <div className="font-bold text-2xl">
        <span className="dark:text-green-500 text-primaryBgBtn">My </span>
        Work
      </div>
    );
  }
  return (
    <section className="p-6 sm:p-8">
      {renderTitle()}
      <div className="mt-4 px-6 flex justify-center">
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full max-w-[45rem] text-center"
        >
          <CarouselContent>
            {workingMap.map((project, index) => (
              <CarouselItem
                key={index}
                className="lg:basis-1/5 md:basis-1/4 sm:basis-1/3 basis-1/2"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-1xl font-semibold">
                        {index + 1}
                        {project.title}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
