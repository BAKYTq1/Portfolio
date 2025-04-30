import React from "react";

export const HeaderContainerByAnima = () => {
  return (
    <header className="w-full py-12 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto flex flex-col items-start gap-3">
        <h1 className="font-['Jost',Helvetica] font-bold text-white text-5xl md:text-6xl leading-tight">
          Чат
        </h1>
        <p className="font-['Jost',Helvetica] font-medium text-white text-lg leading-snug">
          Отзывы - Запросы - Жалобы
        </p>
      </div>
    </header>
  );
};