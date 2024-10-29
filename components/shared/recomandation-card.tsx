import { Button, Card, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  price: number;
  image: string;
  className?: string;
}

export const RecomandationCard: React.FC<Props> = ({ title, price, image }) => {
  return (
    <Card>
      <Flex direction={"column"} align={"center"} gap={"2"}>
        <Image
          src={image}
          className="rounded-lg cursor-pointer "
          alt="recomandation"
          width={300}
          height={200}
          sizes="100vw"
        />

        <Text className="w-full" align={"left"} weight={"bold"}>
          {title}
        </Text>
        <Flex width={"100%"} align={"center"} justify={"between"}>
          <Flex direction={"column"}>
            <Text color="gray">ЦІНА:</Text>
            <Text>{price} UAH</Text>
          </Flex>

          <Button variant="soft" size={"3"}>
            Купити
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};
