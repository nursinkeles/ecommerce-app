import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../api";
import { Box, Text, Button } from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";
function ProductDetail() {
  const { product_id } = useParams();

  const { isLoading, error, data } = useQuery(["product", product_id], () => {
    fetchProduct(product_id);
  });

  isLoading && <div>Loading...</div>;
  error && <div>Error</div>;
  // const images = data.photos.map((url) =>({original:url}))
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      // thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      // thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      // thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <div>
      <Button colorScheme="pink">Add to basket</Button>
      <Text as="h2" fontSize="2xl">
        {" "}
        Title
        {/* {data.title}{" "} */}
      </Text>
      <Text as="h2" fontSize="2xl">
        {" "}
        12/12/2013
      </Text>
      {/* <p>{data.body}</p> */}
      <p>lorem ipsum dolor sit amet, consectetur adip</p>
      <Box margin="10">
        <ImageGallery items={images} />
      </Box>
    </div>
  );
}

export default ProductDetail;
