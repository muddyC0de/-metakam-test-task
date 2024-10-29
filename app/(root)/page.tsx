"use client";

import { Container, Options, Slider } from "@/components/shared";
import { RecomandationCard } from "@/components/shared/recomandation-card";
import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import React from "react";

const recomandations = [
  {
    title: "Чоловічі Кросівки Nike Blazer Mid Suede",
    price: 1499,
    image: "/assets/images/rec-1.png",
  },
  {
    title: "Чоловічі Кросівки Nike Air Max 270",
    price: 1999,
    image: "/assets/images/rec-2.png",
  },
  {
    title: "Кросівки Puma X Aka Boku Future Rider",
    price: 3699,
    image: "/assets/images/rec-3.png",
  },
  {
    title: "Кросівки Black Edition",
    price: 2999,
    image: "/assets/images/rec-4.png",
  },
];

export default function Home() {
  const [selectedColor, setSelectedColor] = React.useState<
    "white" | "black" | "red"
  >("white");

  const onChangeColor = (value: "white" | "black" | "red") => {
    setSelectedColor(value);
  };

  return (
    <Container>
      <Flex
        gap={"9"}
        className="sm:flex-col sm:items-center sm:px-2 md:px-0 md:items-start lg:flex lg:items-start lg:px-0 lg:flex-row"
      >
        <Slider color={selectedColor} />
        <Flex
          width={"700px"}
          className="sm:px-2"
          direction={"column"}
          gap={"4"}
        >
          <Heading wrap={"wrap"} size={"7"} className="font-inter">
            Баскетбольні кросівки Ja 1
          </Heading>
          <Text
            className="font-inter text-wrap sm:text-lg sm:w-[600px]"
            color="gray"
          >
            Джа Морант став суперзіркою, якою він є сьогодні, неодноразово
            топлячи перемички на кривих дисках, стрибаючи на тракторних шинах і
            прориваючись крізь дорожні конуси в спекотне літо Південної
            Кароліни. Ja 1 - це свідчення його злету. Завдяки амортизації Air
            Zoom, вона підтримує підскоки та гіпер-швидкість без шкоди для
            комфорту, щоб ви могли контролювати власну долю на майданчику, як це
            робить Джа.
          </Text>

          <Options onChangeColor={onChangeColor} />

          <Button size={"3"} variant="soft" className="w-full">
            Додати в корзину
          </Button>
        </Flex>
      </Flex>

      <Box className="mt-20">
        <Heading weight={"medium"} size={"5"} className="font-inter">
          Рекомендації
        </Heading>

        <Flex className="mt-5 mb-5 sm:flex-col lg:flex-row" gap={"8"}>
          {recomandations.map((recomandation) => (
            <RecomandationCard
              key={recomandation.title}
              title={recomandation.title}
              price={recomandation.price}
              image={recomandation.image}
            />
          ))}
        </Flex>
      </Box>
    </Container>
  );
}
