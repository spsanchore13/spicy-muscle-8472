import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/HomeLiving/action";
import { useSearchParams, Link } from "react-router-dom";
import { Box, Button, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";

const HomeLivingPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.reducer.data);

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <Stack p={10}>
      <SimpleGrid columns={[1, 1, 3, 3]} spacing={10}>
        {data?.map((el) => (
          <Box key={el.id} position="relative">
            <Link to="">
              <Image w="100%" h="100%" src={el.url} alt="" />
            </Link>
            <Button
              borderRadius="none"
              position="absolute"
              top="90%"
              left="40%"
              transform="translate(-25%,-50%)"
            >
              {el.name}
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default HomeLivingPage;
