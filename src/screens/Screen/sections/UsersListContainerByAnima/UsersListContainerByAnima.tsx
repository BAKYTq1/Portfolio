import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardHeader } from "../../../../components/ui/card";
import { ScrollArea } from "../../../../components/ui/scroll-area";

export const UsersListContainerByAnima = (): JSX.Element => {
  // User request data for mapping
  const userRequests = [
    {
      id: 1,
      name: "Марина Сополова",
      type: "Ментор - Поддержка",
      date: "11.12.24",
      highlighted: true,
    },
    {
      id: 2,
      name: "Марина Сополова",
      type: "Пользователь - Вопросы",
      date: "11.12.24",
      highlighted: false,
    },
    {
      id: 3,
      name: "Марина Сополова",
      type: "Ментор - Поддержка",
      date: "11.12.24",
      highlighted: false,
    },
    {
      id: 4,
      name: "Марина Сополова",
      type: { prefix: "Пользователь - ", suffix: "Жалоба", isAlert: true },
      date: "11.12.24",
      highlighted: false,
    },
    {
      id: 5,
      name: "Марина Сополова",
      type: "Ментор - Поддержка",
      date: "11.12.24",
      highlighted: false,
    },
    {
      id: 6,
      name: "Марина Сополова",
      type: "Ментор - Поддержка",
      date: "11.12.24",
      highlighted: false,
    },
    {
      id: 7,
      name: "Марина Сополова",
      type: "Ментор - Поддержка",
      date: "11.12.24",
      highlighted: false,
    },
    {
      id: 8,
      name: "Марина Сополова",
      type: "Ментор - Поддержка",
      date: "11.12.24",
      highlighted: false,
    },
    {
      id: 9,
      name: "Марина Сополова",
      type: "Ментор - Поддержка",
      date: "11.12.24",
      highlighted: false,
    },
    {
      id: 10,
      name: "Марина Сополова",
      type: "Ментор - Поддержка",
      date: "11.12.24",
      highlighted: false,
    },
  ];

  return (
    <Card className="w-full max-w-[700px] h-[616px] bg-[#f5f6fb] rounded-3xl">
      <CardHeader className="flex flex-row items-center justify-between p-5 pb-0">
        <h2 className="font-subtitle-20-medium font-[number:var(--subtitle-20-medium-font-weight)] text-black text-[length:var(--subtitle-20-medium-font-size)] tracking-[var(--subtitle-20-medium-letter-spacing)] leading-[var(--subtitle-20-medium-line-height)] whitespace-nowrap [font-style:var(--subtitle-20-medium-font-style)] border-l border-[#23afce] pl-3">
          Запросы
        </h2>

        <div className="flex items-center gap-3">
          <Button
            variant="default"
            className="h-8 w-[106px] bg-primarycherry text-primarysakura text-xs rounded-lg shadow-shadow-xs font-normal"
          >
            Назад
          </Button>

          <Button
            variant="default"
            className="h-8 w-[106px] bg-primarycherry text-primarysakura text-xs rounded-lg shadow-shadow-xs font-normal"
          >
            Следующий
          </Button>

          <div className="flex items-center bg-primarycherry text-primarysakura p-2 rounded-lg shadow-shadow-xs">
            <span className="text-xs font-normal">Страница:</span>
            <div className="mx-2 px-2 bg-backgroundblack rounded border border-solid border-[#f0f0f3]">
              <span className="text-black text-xs font-normal">1</span>
            </div>
            <span className="text-xs font-normal">- 10</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-5 pt-[70px]">
        <div className="flex flex-col border-l border-[#23afce] pl-3">
          <div className="flex items-start justify-between mb-3">
            <div className="font-body-16-medium font-[number:var(--body-16-medium-font-weight)] text-textwrite text-[length:var(--body-16-medium-font-size)] tracking-[var(--body-16-medium-letter-spacing)] leading-[var(--body-16-medium-line-height)] whitespace-nowrap [font-style:var(--body-16-medium-font-style)]">
              Все запросы
            </div>

            <div className="flex items-center gap-3">
              <img className="w-6 h-6" alt="Icons" src="/icons.svg" />
              <img className="w-6 h-6" alt="Icons" src="/icons-1.svg" />
            </div>
          </div>

          <ScrollArea className="h-[488px] pr-3">
            {userRequests.map((request) => (
              <div
                key={request.id}
                className={`flex items-center justify-between py-2 mb-3 ${
                  request.highlighted
                    ? "bg-oldold-backgroundblack border-r border-[#23afce]"
                    : ""
                }`}
              >
                <div className="flex flex-col flex-1">
                  <div className="font-body-14-medium font-[number:var(--body-14-medium-font-weight)] text-black text-[length:var(--body-14-medium-font-size)] tracking-[var(--body-14-medium-letter-spacing)] leading-[var(--body-14-medium-line-height)] [font-style:var(--body-14-medium-font-style)]">
                    {request.name}
                  </div>

                  <div className="font-body-14-medium font-[number:var(--body-14-medium-font-weight)] text-textwrite text-[length:var(--body-14-medium-font-size)] tracking-[var(--body-14-medium-letter-spacing)] leading-[var(--body-14-medium-line-height)] [font-style:var(--body-14-medium-font-style)]">
                    {typeof request.type === "string" ? (
                      request.type
                    ) : (
                      <>
                        <span className="text-[#6e6d72]">
                          {request.type.prefix}
                        </span>
                        <span className="text-[#e83535]">
                          {request.type.suffix}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div className="font-body-12-bold font-[number:var(--body-12-bold-font-weight)] text-textwrite text-[length:var(--body-12-bold-font-size)] tracking-[var(--body-12-bold-letter-spacing)] leading-[var(--body-12-bold-line-height)] whitespace-nowrap [font-style:var(--body-12-bold-font-style)]">
                  {request.date}
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  );
};
