import React, { useState } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
  useMediaQuery,
} from "@mui/material";
// import { useGetProductsQuery } from "state/api";
import Header from "components/Header";
import { productMockData } from "data/productData";

const Product = ({
  id,
  name,
  description,
  price,
  discount,
  category,
  instock,
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 14 }}
          color={theme.palette.secondary[700]}
          gutterBottom
        >
          {category}
        </Typography>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
          KSH{Number(price).toFixed(2)}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          See More
        </Button>
      </CardActions>
      <Collapse
        in={isExpanded}
        timeout="auto"
        unmountOnExit
        sx={{ color: theme.palette.neutral[300] }}
      >
        <CardContent>
          <Typography>id: {id}</Typography>
          <Typography>Supply Left: {instock}</Typography>
          <Typography>discount: {discount}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const Products = () => {
  // const { data, isLoading } = useGetProductsQuery();
  const [productsData, setProductsData] = useState(productMockData);
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  console.log("Products Data: ", productsData);

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="PRODUCTS" subtitle="List of all products" />
      {productsData ? (
        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          {productsData.map(
            ({ id, name, description, price, discount, category, instock }) => (
              <Product
                key={id}
                id={id}
                name={name}
                description={description}
                price={price}
                discount={discount}
                category={category}
                instock={instock}
              />
            )
          )}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};

export default Products;
