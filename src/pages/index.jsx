import { Box, Container } from "@mui/material";
import UnggahResep from "components/UnggahResep/unggahResep";
import MetodePembayaran from "components/MetodePembayaran";
import ProductCard from "components/ProductCard";
import BannerJaminan from "components/BannerJaminan";
import Kategori from "components/Kategori";

const Home = () => {
  return (
    <Box>
      <Container>
        <UnggahResep />
        <Kategori />
        <Box sx={{ display: "flex" }}>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Box>
        <BannerJaminan />
        <MetodePembayaran />
      </Container>
    </Box>
  );
};

export default Home;
