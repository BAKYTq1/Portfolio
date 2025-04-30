import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const RequestsInfoByAnima = (): JSX.Element => {
  const statsData = [
    {
      id: 1,
      title: "Запросы",
      value: 123,
      unit: "раз",
      valueColor: "text-secondaryblackcherry",
      isHighlighted: true,
    },
    {
      id: 2,
      title: "Жалобы",
      value: 10,
      unit: "раз",
      valueColor: "text-textred",
      isHighlighted: false,
    },
    {
      id: 3,
      title: "Отзывы",
      value: 220,
      unit: "раз",
      valueColor: "text-textblack",
      isHighlighted: false,
    },
  ];

  return (
    <Card className="flex flex-col w-full max-w-[700px] items-start gap-5 p-5 bg-[#f5f6fb] rounded-3xl">
      <CardContent className="p-0 w-full">
        <div className="inline-flex items-start gap-11 relative self-stretch w-full">
          <div className="relative w-fit mt-[-1.00px] font-subtitle-20-medium font-[number:var(--subtitle-20-medium-font-weight)] text-black text-[length:var(--subtitle-20-medium-font-size)] tracking-[var(--subtitle-20-medium-letter-spacing)] leading-[var(--subtitle-20-medium-line-height)] whitespace-nowrap [font-style:var(--subtitle-20-medium-font-style)]">
            Данные
          </div>
        </div>

        <div className="flex flex-wrap items-start justify-between relative self-stretch w-full mt-5">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className={`flex flex-col w-40 items-start gap-2 px-3 py-0 relative rounded-[0px_12px_12px_0px] ${
                stat.isHighlighted
                  ? "border-l-2 [border-left-style:solid] border-[#23afce] [background:linear-gradient(270deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_100%)]"
                  : ""
              }`}
            >
              <div className="relative w-fit mt-[-2.00px] font-body-16-medium font-[number:var(--body-16-medium-font-weight)] text-textwrite text-[length:var(--body-16-medium-font-size)] tracking-[var(--body-16-medium-letter-spacing)] leading-[var(--body-16-medium-line-height)] whitespace-nowrap [font-style:var(--body-16-medium-font-style)]">
                {stat.title}
              </div>

              <div className="inline-flex items-start gap-1 relative flex-[0_0_auto]">
                <div
                  className={`relative w-fit mt-[-1.00px] [font-family:'Jost',Helvetica] font-bold ${stat.valueColor} text-[42px] tracking-[0] leading-[58px] whitespace-nowrap`}
                >
                  {stat.value}
                </div>

                <div className="relative w-fit mt-[-1.00px] [font-family:'Jost',Helvetica] font-medium text-black text-lg tracking-[0] leading-[22px] whitespace-nowrap">
                  {stat.unit}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
