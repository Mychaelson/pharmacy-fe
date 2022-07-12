/* eslint-disable react/jsx-no-useless-fragment */
import { Box, Typography, Grid } from "@mui/material";
import CardCategory from "components/Admin/CardCategory";
import CardWithCircularBar from "components/Admin/CardWithCircularBar";
import { useState, useEffect } from "react";
import CardStatistik from "components/Admin/CardStatistik";
import requiresAdmin from "config/requireAdmin";
import axiosInstance from "config/api";
import moment from "moment";

const DashboardPage = () => {
  const [pemesanan, setPemesanan] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(moment());
  const [expStok, setExpStok] = useState({});
  const [todayTransaction, setTodayTransaction] = useState({});
  const [todayStok, setTodayStok] = useState({});

  const penjualanObatOption = {
    stroke: { width: 2, curve: "smooth" },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Des",
      ],
    },
  };

  const penjualanObatSeries = [
    {
      name: "Obat Bebas",
      data: [750, 800, 850, 500, 300, 400, 100, 700, 550, 1200, 850, 300],
    },
    {
      name: "Obat Racikan",
      data: [300, 200, 450, 500, 600, 550, 700, 770, 600, 800, 1250, 100],
    },
  ];

  const profitOption = {
    xaxis: {
      categories: [
        "Senin",
        "Selasa",
        "Rabu",
        "Kamis",
        "Jumat",
        "Sabtu",
        "Minggu",
      ],
    },
  };

  const profitSeries = [
    {
      name: "series-1",
      data: [3, 5, 6, 4, 8, 7, 9],
    },
  ];

  const [sort, setSort] = useState("");

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  const fetchPemesananDataCount = async () => {
    try {
      const res = await axiosInstance.get("/report/get-transaction-count");
      setPemesanan(res.data.result);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  const fetchExpStok = async () => {
    try {
      const res = await axiosInstance.get("/report/get-exp-product");
      setExpStok(res.data.result);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  const fetchTodayTransaction = async () => {
    try {
      const res = await axiosInstance.get("/report/get-today-transaction");
      setTodayTransaction(res.data.result);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  const fetchTodayStok = async () => {
    try {
      const res = await axiosInstance.get("/report/get-today-stok");
      const stokInfo = {
        todayStok: res.data.result.todayStok.sum,
        yesterdayStok: res.data.result.yesterdayStok.sum,
      };
      setTodayStok(stokInfo);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPemesananDataCount();
    setLastUpdated(moment());
    fetchExpStok();
    fetchTodayTransaction();
    fetchTodayStok();
  }, []);

  console.log(todayStok);

  return (
    <Grid container>
      {/* Container 1 */}
      <Grid container sx={{ marginBottom: "32px" }}>
        <Grid item>
          <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
            Analisis Produk & Toko
          </Typography>
          <Typography sx={{ color: "Sidebar.500", fontSize: "14px" }}>
            Update terakhir:{" "}
            <Typography
              component="span"
              sx={{ fontSize: "14px", fontWeight: "bold" }}
            >
              {moment(lastUpdated).format("LLL")}
            </Typography>
          </Typography>

          <Grid container spacing={2}>
            <CardWithCircularBar
              title="Profit Hari Ini"
              amount="Rp 10.000.000"
              value="5.700.000"
              percentage={25}
              notation="+"
            />
            <CardWithCircularBar
              title="Total Pemesanan Hari Ini"
              amount={todayTransaction.todayOrder}
              value={
                todayTransaction.todayOrder - todayTransaction.yesterdayOrder
              }
              percentage={Math.abs(
                ((todayTransaction.todayOrder -
                  todayTransaction.yesterdayOrder) /
                  todayTransaction.yesterdayOrder) *
                  100
              ).toFixed(1)}
              notation={
                todayTransaction.todayOrder - todayTransaction.yesterdayOrder <
                0
                  ? "-"
                  : "+"
              }
            />
            <CardWithCircularBar
              title="Sisa Stok Hari Ini"
              amount={todayStok.todayStok}
              value={Math.abs(todayStok.todayStok - todayStok.yesterdayStok)}
              percentage={Math.abs(
                ((todayStok.todayStok - todayStok.yesterdayStok) /
                  todayStok.yesterdayStok) *
                  100
              ).toFixed(1)}
              notation={
                todayStok.todayStok - todayStok.yesterdayStok < 0 ? "-" : "+"
              }
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Container 2 */}
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
            Penting Hari Ini
          </Typography>
          <Typography sx={{ color: "Sidebar.500", fontSize: "14px" }}>
            Aktivitas yang perlu kamu ketahui untuk menjaga kepuasan pelanggan
          </Typography>
          <Grid
            container
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <CardCategory
              title="Menunggu Pembayaran"
              value={pemesanan.reduce((init, val) => {
                if (val.paymentStatusId === 1) {
                  return init + val.count;
                }

                return init;
              }, 0)}
              column={4}
            />
            <CardCategory
              title="Pesanan Baru"
              value={pemesanan.reduce((init, val) => {
                if (val.paymentStatusId === 2) {
                  return init + val.count;
                }

                return init;
              }, 0)}
              column={4}
            />
            <CardCategory
              title="Dikirim"
              value={pemesanan.reduce((init, val) => {
                if (val.paymentStatusId === 3) {
                  return init + val.count;
                }

                return init;
              }, 0)}
              column={4}
            />
            <CardCategory
              title="Selesai"
              value={pemesanan.reduce((init, val) => {
                if (val.paymentStatusId === 4) {
                  return init + val.count;
                }

                return init;
              }, 0)}
              column={4}
            />
            <CardCategory
              title="Dibatalkan"
              value={pemesanan.reduce((init, val) => {
                if (val.paymentStatusId === 5) {
                  return init + val.count;
                }

                return init;
              }, 0)}
              column={4}
            />
            {/* <CardCategory title="Chat Baru" value={0} column={4} /> */}
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
            Kedaluwarsa Obat
          </Typography>
          <Typography sx={{ color: "Sidebar.500", fontSize: "14px" }}>
            Cek tanggal kedaluwarsa untuk mengorganisir stok obat
          </Typography>
          <Grid
            xs={7}
            item
            sx={{ marginRight: "16px", marginTop: "16px", maxHeight: "198px" }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                paddingX: "16px",
                paddingY: "38px",
                boxShadow: 2,
                borderRadius: "5px",
                maxHeight: "198px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  Telah Kadaluwarsa
                </Typography>
                <Typography
                  sx={{ fontWeight: "bold", fontSize: "24px", color: "red" }}
                >
                  {expStok?.expStok?.sum}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  Kadaluwarse Bulan Ini
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "24px",
                    color: "#F4BB44",
                  }}
                >
                  {expStok?.expSoon?.sum}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                >
                  Kadaluwarsa 3 Bulan Ke Depan
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "24px",
                    color: "#21CDC0",
                  }}
                >
                  {expStok?.expIn3Months?.sum}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      {/* Container 3 Graph */}
      <Grid container spacing={2}>
        {/* Statistik Profit */}

        <CardStatistik
          cardTitle="Profit"
          cardCaption="Data dinyatakan dalam jutaan rupiah"
          column={6}
          chartOption={profitOption}
          chartSeries={profitSeries}
          selectHandle={handleChange}
          selectValue={sort}
          chartSort={[
            { sortValue: "Mingguan", sortTitle: "Mingguan" },
            { sortValue: "Bulanan", sortTitle: "Bulanan" },
            { sortValue: "Tahunan", sortTitle: "Tahunan" },
          ]}
          chartType="bar"
        />

        <CardStatistik
          cardTitle="Penjualan Obat"
          column={6}
          chartOption={penjualanObatOption}
          chartSeries={penjualanObatSeries}
          selectHandle={handleChange}
          selectValue={sort}
          chartSort={[
            { sortValue: "Mingguan", sortTitle: "Mingguan" },
            { sortValue: "Bulanan", sortTitle: "Bulanan" },
            { sortValue: "Tahunan", sortTitle: "Tahunan" },
          ]}
          chartType="line"
        />
      </Grid>
    </Grid>
  );
};

// eslint-disable-next-line no-unused-vars
export const getServerSideProps = requiresAdmin((context) => {
  return {
    props: {},
  };
});

export default DashboardPage;
