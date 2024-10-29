import { Box, Flex, RadioCards, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

interface Props {
  onChangeColor: (value: "white" | "black" | "red") => void;
  className?: string;
}

const sneakersPreview = [
  {
    color: "white",
    img: "/assets/images/white-3-bg.png",
  },

  {
    color: "black",
    img: "/assets/images/black-3-bg.png",
  },

  {
    color: "red",
    img: "/assets/images/red-3-bg.png",
  },
];

export const Options: React.FC<Props> = ({ onChangeColor, className }) => {
  return (
    <div className={className}>
      <Box className="mb-4">
        <Text weight={"bold"}>Розмір:</Text>
        <RadioCards.Root
          className="mt-1"
          defaultValue="1"
          columns={{ initial: "1", sm: "3" }}
        >
          <RadioCards.Item value="1">
            <Flex direction="column" width="100%">
              <Text weight="bold">43</Text>
            </Flex>
          </RadioCards.Item>
          <RadioCards.Item value="2">
            <Flex direction="column" width="100%">
              <Text weight="bold">45</Text>
            </Flex>
          </RadioCards.Item>
          <RadioCards.Item value="3">
            <Flex direction="column" width="100%">
              <Text weight="bold">46</Text>
            </Flex>
          </RadioCards.Item>
        </RadioCards.Root>
      </Box>
      <Box>
        <Text weight={"bold"}>Колір:</Text>
        <RadioCards.Root
          className="mt-1"
          defaultValue="1"
          columns={{ initial: "1", sm: "3" }}
        >
          {sneakersPreview.map((item, index) => (
            <RadioCards.Item
              onClick={() =>
                onChangeColor(item.color as "white" | "black" | "red")
              }
              key={index}
              style={{ height: "70px" }}
              className="relative"
              value={String(index + 1)}
            >
              <Flex direction="column" width="100%">
                <Image
                  className="absolute -top-5 left-14"
                  width={80}
                  height={80}
                  src={item.img}
                  alt={"sneaker"}
                />
              </Flex>
            </RadioCards.Item>
          ))}
        </RadioCards.Root>
      </Box>
    </div>
  );
};
