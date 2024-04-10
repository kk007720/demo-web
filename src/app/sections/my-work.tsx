'use client';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import Link from 'next/link';
import Image from 'next/image';

const workingMap = [
  {
    title: '臺北市教育局酷AI學習平台',
    description:
      '●企業級生成式AI應用教學●本人企劃撰寫●學生學習紀錄分析●React Js',
    imageUrl: ['/project-2-coolAi.png', '/project-2-cooAiChildren.jpeg'],
    resumeCakeUrl: 'https://www.cakeresume.com/portfolios/ai-aa20ce',
  },
  {
    title: '正隆股份有限公司EIP系統',
    description:
      '●整合使用60年的舊版EIP●本人一條龍撰寫●整合各系統快速簽核提示●紀錄各item員工點擊及使用頻率⭐榮獲年度新人晉升',
    imageUrl: ['/project-1-eipMain.png'],
    resumeCakeUrl: 'https://www.cakeresume.com/portfolios/eip-bec092',
  },
  {
    title: '儲運Ｅ化系統(條碼槍串接)',
    description:
      '●條碼槍barcode藍芽串接智慧型裝置or電腦●刷入條碼後寫入儲位順序●串接SAP判斷訂單狀態⭐榮獲2021年度優良改善案例競賽第二名(1年效益約39.6萬元, 節省日夜班360分鐘)',
    imageUrl: ['/project-3-barcode.png', '/project-3-barcode2.gif'],
    resumeCakeUrl: 'https://www.cakeresume.com/portfolios/e-bea6e4',
  },
  {
    title: '員工福利系統',
    description:
      '●串接員工年資, 自動計算補助金額●公司員工開團報名員工旅遊、選擇年度禮券●中高階主管體檢●E化人事流程轉出csv﻿⭐榮獲公司嘉獎2支',
    imageUrl: ['/project-4-welfare1.png', '/project-4-welfare2.png'],
    resumeCakeUrl: 'https://www.cakeresume.com/portfolios/a245b9',
  },
  {
    title: '發票抽獎系統',
    description:
      '●抽獎文案自動生成(網址)●Rwd 模板使用●串接財政部發票API回傳發票明細●系統自動抽獎生成csv',
    imageUrl: ['/project-5-lottery1.png', '/project-5-lottery2.png'],
    resumeCakeUrl: 'https://www.cakeresume.com/portfolios/c0dc49',
  },
  {
    title: '異常案例呈報簽核系統',
    description:
      '●提供各個造紙廠呈報機器異常案例●後台串接提供管理員設定簽核會辦人員',
    imageUrl: ['/project-6-case.webp'],
    resumeCakeUrl: 'https://www.cakeresume.com/portfolios/7167f5',
  },
  {
    title: '工業紙箱計算模組',
    description: ' ●公司亮點●公佈欄、後台●工紙材質快速匹配與耐壓計算',
    imageUrl: ['/project-8-calculate.gif'],
    resumeCakeUrl: 'https://www.cakeresume.com/portfolios/2effc0',
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
      <div className="mt-4 sm:px-6 flex justify-center">
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full md:max-w-[55rem] max-w-[45rem] text-center"
        >
          <CarouselContent>
            {workingMap.map((project, index) => (
              <CarouselItem
                key={index}
                className="sm:basis-1/3 cursor-pointer"
                onClick={() => {}}
              >
                <Link href={`${project.resumeCakeUrl}`} target="_blank">
                  <div className="text-xs py-1 font-semibold">
                    {project.title}
                  </div>
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-2 bg-blockBg rounded-lg">
                      <div>
                        {project.imageUrl.length > 1 ? (
                          project.imageUrl.map((p, index) => (
                            <Image
                              key={`projectImage-${index}`}
                              src={p}
                              width={300}
                              height={300}
                              className="rounded mb-2"
                              style={{ width: 'auto', height: 'auto' }}
                              alt={`${project.title}-${index}`}
                            />
                          ))
                        ) : (
                          <Image
                            src={project.imageUrl[0]}
                            width={300}
                            height={300}
                            className="rounded"
                            style={{ width: 'auto', height: 'auto' }}
                            alt={`${project.title}-${index}`}
                          ></Image>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="" />
          <CarouselNext className="" />
        </Carousel>
      </div>
    </section>
  );
}
