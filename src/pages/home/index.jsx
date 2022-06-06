import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Image from "next/image";
import Frame from "../../../../../final-project/Images/Frame.png";
import GoogleIcon from "@mui/icons-material/Google";
import Divider from "@mui/material/Divider";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { Input, InputLabel, OutlinedInput } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const HomePage = () => {
  return (
    <Stack direction="row">
      <Box>
        <Image src={Frame} layout="fixed" />
      </Box>
      <Box px="96px" py="77px">
        <Box component="h1">Mari Kita Mulai</Box>
        <Box m={0} sx={{ color: "gray" }}>
          Sudah punya akun ? {""}
          <Box component="span" sx={{ color: "#05a39e" }}>
            <u>Masuk</u>
          </Box>
        </Box>
        <Stack direction="row" spacing={2} marginY="32px">
          <Button
            fullWidth
            startIcon={<GoogleIcon htmlColor="red" />}
            variant="contained"
            sx={{
              fontWeight: "700",
              fontSize: "12px",
              px: "14px",
              py: "14px",
              minHeight: "48px",
              textTransform: "initial",
              borderRadius: "5px",
              bgcolor: "white",
              color: "black",
              fontWeight: "bold",
              ":hover": {
                cursor: "default",
                backgroundColor: "white",
              },
            }}
          >
            Daftar dengan Google
          </Button>
          <Button
            fullWidth
            startIcon={<FacebookOutlinedIcon />}
            variant="contained"
            sx={{
              fontWeight: "700",
              fontSize: "12px",
              px: "14px",
              py: "14px",
              minHeight: "48px",
              textTransform: "initial",
              borderRadius: "5px",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Daftar dengan Facebook
          </Button>
        </Stack>
        <Divider>atau</Divider>
        <InputLabel>Name</InputLabel>
        <OutlinedInput
          startAdornment={<AccountCircleIcon htmlColor="#02114f" />}
          fullWidth
          sx={{ borderRadius: "10px", marginBottom: "16px" }}
        />
        <InputLabel>Email Address</InputLabel>
        <OutlinedInput
          startAdornment={<MailIcon htmlColor="#02114f" />}
          fullWidth
          sx={{ borderRadius: "10px", marginBottom: "16px" }}
        />
        <InputLabel>Password</InputLabel>
        <OutlinedInput
          startAdornment={<LockIcon htmlColor="#02114f" />}
          fullWidth
          sx={{ borderRadius: "10px", marginBottom: "16px" }}
          endAdornment={<VisibilityOffIcon htmlColor="#02114f" />}
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Saya setuju dengan persyaratan dan ketentuan"
        />
        <Button
          sx={{
            minHeight: "48px",
            textTransform: "initial",
            backgroundColor: "#05a39e",
          }}
          variant="contained"
          fullWidth
        >
          Register
        </Button>
      </Box>
    </Stack>
  );
};

export default HomePage;
