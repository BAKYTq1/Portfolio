import { SendIcon } from "lucide-react";
import React from "react";
import { Avatar } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const SidePanelContainerByAnima = (): JSX.Element => {
  // Chat messages data
  const messages = [
    {
      id: 1,
      sender: "assistant",
      text: "Здравствуйте,меня зовут Алиса чем я могу вам помочь?",
      time: "12:45",
      avatar: "/avatar.png",
    },
    {
      id: 2,
      sender: "user",
      text: "Здравствуйте Алиса,я бы хотела звять консултацию",
      time: "12:46",
      avatar: "/avatar-3.png",
    },
    {
      id: 3,
      sender: "assistant",
      text: "Хорошо,не могли бы вы отправить ваши работы",
      time: "12:45",
      avatar: "/avatar-2.png",
    },
    {
      id: 4,
      sender: "user",
      text: "Здравствуйте Алиса,я бы хотела звять консултацию",
      time: "12:46",
      avatar: "/avatar-3.png",
    },
    {
      id: 5,
      sender: "assistant",
      text: "…",
      time: "",
      avatar: "/avatar-4.png",
    },
  ];

  return (
    <Card className="flex flex-col w-full max-w-[412px] h-[810px] gap-5 p-5 bg-[#f5f6fb] rounded-3xl overflow-hidden">
      <div className="flex flex-col h-full items-start justify-between w-full">
        <div className="flex flex-col items-start gap-6 w-full">
          <header className="flex items-center justify-between w-full">
            <h2 className="font-subtitle-20-medium font-[number:var(--subtitle-20-medium-font-weight)] text-secondaryblackcherry text-[length:var(--subtitle-20-medium-font-size)] tracking-[var(--subtitle-20-medium-letter-spacing)] leading-[var(--subtitle-20-medium-line-height)]">
              Чат
            </h2>
          </header>

          <section className="flex items-center justify-between px-3 py-0 w-full border-l border-[#23afce]">
            <div className="flex items-center gap-3">
              <Avatar className="w-11 h-11">
                <img
                  className="w-full h-full object-cover"
                  alt="User avatar"
                  src="/rectangle-34.png"
                />
              </Avatar>

              <div className="flex flex-col items-start justify-center">
                <span className="font-body-14-medium font-[number:var(--body-14-medium-font-weight)] text-black text-[length:var(--body-14-medium-font-size)] tracking-[var(--body-14-medium-letter-spacing)] leading-[var(--body-14-medium-line-height)]">
                  Марина Сополова
                </span>

                <div className="flex items-center gap-3">
                  <span className="font-body-14-medium font-[number:var(--body-14-medium-font-weight)] text-textwrite text-[length:var(--body-14-medium-font-size)] tracking-[var(--body-14-medium-letter-spacing)] leading-[var(--body-14-medium-line-height)]">
                    UX/UI специалист
                  </span>

                  <span className="font-body-14-medium font-[number:var(--body-14-medium-font-weight)] text-textwrite text-[length:var(--body-14-medium-font-size)] tracking-[var(--body-14-medium-letter-spacing)] leading-[var(--body-14-medium-line-height)]">
                    2 года
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <span className="font-body-12-bold font-[number:var(--body-12-bold-font-weight)] text-textwrite text-[length:var(--body-12-bold-font-size)] tracking-[var(--body-12-bold-letter-spacing)] leading-[var(--body-12-bold-line-height)]">
                4.6
              </span>
              <img
                className="w-4 h-4"
                alt="Rating star"
                src="/component-3.svg"
              />
            </div>
          </section>

          <CardContent className="flex flex-col items-center gap-3 p-0 w-full overflow-y-auto">
            <div className="flex flex-col items-start gap-6 w-full">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className="flex items-center justify-between w-full"
                >
                  {message.sender === "assistant" ? (
                    <>
                      <div className="flex items-center gap-[7px]">
                        <Avatar className="w-[37px] h-[37px]">
                          <img
                            className="w-full h-full"
                            alt="Assistant avatar"
                            src={message.avatar}
                          />
                        </Avatar>

                        <div className="flex items-center relative rounded-lg shadow-shadow-lg">
                          <img
                            className="w-[8.51px] h-4"
                            alt="Tooltip"
                            src="/tooltip-2.svg"
                          />

                          <div className="flex flex-col items-start px-3 py-2 bg-white rounded-lg">
                            <p className="font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-gray-700 text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)]">
                              {message.text}
                            </p>
                          </div>
                        </div>
                      </div>

                      {message.time && (
                        <span className="font-body-12-regular font-[number:var(--body-12-regular-font-weight)] text-text-write text-[length:var(--body-12-regular-font-size)] tracking-[var(--body-12-regular-letter-spacing)] leading-[var(--body-12-regular-line-height)]">
                          {message.time}
                        </span>
                      )}
                    </>
                  ) : (
                    <>
                      {message.time && (
                        <span className="font-body-12-regular font-[number:var(--body-12-regular-font-weight)] text-text-write text-[length:var(--body-12-regular-font-size)] tracking-[var(--body-12-regular-letter-spacing)] leading-[var(--body-12-regular-line-height)]">
                          {message.time}
                        </span>
                      )}

                      <div className="flex items-center gap-1">
                        <div className="flex items-center relative rounded-lg shadow-shadow-lg">
                          <div className="flex bg-gray-900 flex-col items-start px-3 py-2 rounded-lg">
                            <p className="font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-white text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)]">
                              {message.text}
                            </p>
                          </div>

                          <img
                            className="w-[8.51px] h-4"
                            alt="Tooltip"
                            src="/tooltip.svg"
                          />
                        </div>

                        <Avatar className="w-[37px] h-[37px]">
                          <img
                            className="w-full h-full object-cover"
                            alt="User avatar"
                            src={message.avatar}
                          />
                        </Avatar>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </div>

        <div className="flex h-[60px] items-center gap-3 px-3 py-1 w-full bg-primarycherry rounded-2xl border-2 border-solid border-[#f0f0f3] shadow-[inset_1px_1px_2px_#aeaec033,inset_-1px_-1px_1px_#ffffffb2]">
          <Input
            className="flex-1 h-full font-subtitle-18-medium font-[number:var(--subtitle-18-medium-font-weight)] text-textwrite text-[length:var(--subtitle-18-medium-font-size)] tracking-[var(--subtitle-18-medium-letter-spacing)] leading-[var(--subtitle-18-medium-line-height)] border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
            placeholder="Напишите здесь"
          />

          <Button
            className="flex items-center gap-2.5 p-2 bg-secondaryblackcherry rounded-xl h-auto"
            size="icon"
          >
            <SendIcon className="w-6 h-6 text-white" />
          </Button>
        </div>
      </div>
    </Card>
  );
};
