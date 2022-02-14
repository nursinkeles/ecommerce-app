import React from "react";
import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Card() {
  // function Card({item}) {

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
      <Link to="#/">
        <Image src="https://picsum.photos/400/200" loading="lazy" />
        {/* src={item.photos[0]} */}
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            12/12/2021
            {/* moment{item.createdAt}.format("DD/MM/YYYY") */}
          </Box>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            Macbook Pro
            {/* {item.title} */}
          </Box>
          <Box>
            100 TL
            {/* {item.price} */}
          </Box>
        </Box>
      </Link>

      <Button colorScheme="pink">Add to basket</Button>
    </Box>
  );
}

export default Card;
