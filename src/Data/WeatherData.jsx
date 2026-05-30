const weatherData = {
  bandung: {
    kota: "Bandung",
    negara: "Indonesia",
    suhu: 22,
    kondisi: "Berawan",
    ikon: "⛅",
    kelembapan: 80,
    kecepatan_angin: 15,
    uv_index: 3,
    prakiraan: [
      { hari: "Senin",   ikon: "🌧️", kondisi: "Hujan",   suhu_min: 18, suhu_max: 24 },
      { hari: "Selasa",  ikon: "⛅",  kondisi: "Berawan", suhu_min: 19, suhu_max: 25 },
      { hari: "Rabu",    ikon: "☀️",  kondisi: "Cerah",   suhu_min: 20, suhu_max: 27 },
      { hari: "Kamis",   ikon: "🌧️", kondisi: "Hujan",   suhu_min: 17, suhu_max: 23 },
      { hari: "Jumat",   ikon: "⛅",  kondisi: "Berawan", suhu_min: 19, suhu_max: 26 }
    ]
  },
  jakarta: {
    kota: "Jakarta",
    negara: "Indonesia",
    suhu: 32,
    kondisi: "Cerah",
    ikon: "☀️",
    kelembapan: 70,
    kecepatan_angin: 20,
    uv_index: 8,
    prakiraan: [
      { hari: "Senin",   ikon: "☀️",  kondisi: "Cerah",   suhu_min: 27, suhu_max: 34 },
      { hari: "Selasa",  ikon: "⛅",  kondisi: "Berawan", suhu_min: 26, suhu_max: 33 },
      { hari: "Rabu",    ikon: "🌧️", kondisi: "Hujan",   suhu_min: 25, suhu_max: 31 },
      { hari: "Kamis",   ikon: "☀️",  kondisi: "Cerah",   suhu_min: 27, suhu_max: 35 },
      { hari: "Jumat",   ikon: "⛅",  kondisi: "Berawan", suhu_min: 26, suhu_max: 32 }
    ]
  },
  surabaya: {
    kota: "Surabaya",
    negara: "Indonesia",
    suhu: 34,
    kondisi: "Panas",
    ikon: "🌤️",
    kelembapan: 65,
    kecepatan_angin: 25,
    uv_index: 9,
    prakiraan: [
      { hari: "Senin",   ikon: "🌤️", kondisi: "Panas",   suhu_min: 28, suhu_max: 36 },
      { hari: "Selasa",  ikon: "☀️",  kondisi: "Cerah",   suhu_min: 27, suhu_max: 35 },
      { hari: "Rabu",    ikon: "⛅",  kondisi: "Berawan", suhu_min: 26, suhu_max: 33 },
      { hari: "Kamis",   ikon: "🌧️", kondisi: "Hujan",   suhu_min: 25, suhu_max: 31 },
      { hari: "Jumat",   ikon: "🌤️", kondisi: "Panas",   suhu_min: 28, suhu_max: 36 }
    ]
  },
  yogyakarta: {
    kota: "Yogyakarta",
    negara: "Indonesia",
    suhu: 28,
    kondisi: "Cerah Berawan",
    ikon: "🌤️",
    kelembapan: 75,
    kecepatan_angin: 12,
    uv_index: 6,
    prakiraan: [
      { hari: "Senin",   ikon: "🌤️", kondisi: "Cerah Berawan", suhu_min: 22, suhu_max: 30 },
      { hari: "Selasa",  ikon: "☀️",  kondisi: "Cerah",         suhu_min: 23, suhu_max: 31 },
      { hari: "Rabu",    ikon: "🌧️", kondisi: "Hujan",          suhu_min: 20, suhu_max: 27 },
      { hari: "Kamis",   ikon: "⛅",  kondisi: "Berawan",        suhu_min: 21, suhu_max: 28 },
      { hari: "Jumat",   ikon: "🌤️", kondisi: "Cerah Berawan", suhu_min: 22, suhu_max: 29 }
    ]
  },
  medan: {
    kota: "Medan",
    negara: "Indonesia",
    suhu: 30,
    kondisi: "Hujan Ringan",
    ikon: "🌦️",
    kelembapan: 85,
    kecepatan_angin: 18,
    uv_index: 5,
    prakiraan: [
      { hari: "Senin",   ikon: "🌦️", kondisi: "Hujan Ringan", suhu_min: 24, suhu_max: 31 },
      { hari: "Selasa",  ikon: "🌧️", kondisi: "Hujan",        suhu_min: 23, suhu_max: 29 },
      { hari: "Rabu",    ikon: "⛅",  kondisi: "Berawan",      suhu_min: 24, suhu_max: 30 },
      { hari: "Kamis",   ikon: "🌦️", kondisi: "Hujan Ringan", suhu_min: 23, suhu_max: 30 },
      { hari: "Jumat",   ikon: "☀️",  kondisi: "Cerah",        suhu_min: 25, suhu_max: 32 }
    ]
  },
  bali: {
    kota: "Bali",
    negara: "Indonesia",
    suhu: 29,
    kondisi: "Cerah",
    ikon: "☀️",
    kelembapan: 72,
    kecepatan_angin: 22,
    uv_index: 10,
    prakiraan: [
      { hari: "Senin",   ikon: "☀️",  kondisi: "Cerah",         suhu_min: 24, suhu_max: 31 },
      { hari: "Selasa",  ikon: "☀️",  kondisi: "Cerah",         suhu_min: 25, suhu_max: 32 },
      { hari: "Rabu",    ikon: "🌤️", kondisi: "Cerah Berawan", suhu_min: 24, suhu_max: 30 },
      { hari: "Kamis",   ikon: "⛅",  kondisi: "Berawan",        suhu_min: 23, suhu_max: 29 },
      { hari: "Jumat",   ikon: "☀️",  kondisi: "Cerah",         suhu_min: 25, suhu_max: 32 }
    ]
  },
  makassar: {
    kota: "Makassar",
    negara: "Indonesia",
    suhu: 31,
    kondisi: "Cerah",
    ikon: "☀️",
    kelembapan: 68,
    kecepatan_angin: 28,
    uv_index: 9,
    prakiraan: [
      { hari: "Senin",   ikon: "☀️",  kondisi: "Cerah",         suhu_min: 25, suhu_max: 33 },
      { hari: "Selasa",  ikon: "🌤️", kondisi: "Cerah Berawan", suhu_min: 24, suhu_max: 32 },
      { hari: "Rabu",    ikon: "⛅",  kondisi: "Berawan",        suhu_min: 24, suhu_max: 31 },
      { hari: "Kamis",   ikon: "🌧️", kondisi: "Hujan",          suhu_min: 23, suhu_max: 29 },
      { hari: "Jumat",   ikon: "☀️",  kondisi: "Cerah",         suhu_min: 25, suhu_max: 33 }
    ]
  },
  semarang: {
    kota: "Semarang",
    negara: "Indonesia",
    suhu: 33,
    kondisi: "Panas",
    ikon: "🌡️",
    kelembapan: 78,
    kecepatan_angin: 16,
    uv_index: 8,
    prakiraan: [
      { hari: "Senin",   ikon: "🌡️", kondisi: "Panas",          suhu_min: 26, suhu_max: 35 },
      { hari: "Selasa",  ikon: "⛅",  kondisi: "Berawan",        suhu_min: 25, suhu_max: 33 },
      { hari: "Rabu",    ikon: "🌧️", kondisi: "Hujan",          suhu_min: 24, suhu_max: 30 },
      { hari: "Kamis",   ikon: "🌦️", kondisi: "Hujan Ringan",   suhu_min: 24, suhu_max: 31 },
      { hari: "Jumat",   ikon: "☀️",  kondisi: "Cerah",         suhu_min: 26, suhu_max: 34 }
    ]
  },
  palembang: {
    kota: "Palembang",
    negara: "Indonesia",
    suhu: 35,
    kondisi: "Sangat Panas",
    ikon: "🔆",
    kelembapan: 60,
    kecepatan_angin: 14,
    uv_index: 11,
    prakiraan: [
      { hari: "Senin",   ikon: "🔆",  kondisi: "Sangat Panas",  suhu_min: 27, suhu_max: 37 },
      { hari: "Selasa",  ikon: "☀️",  kondisi: "Cerah",         suhu_min: 26, suhu_max: 36 },
      { hari: "Rabu",    ikon: "🌤️", kondisi: "Cerah Berawan", suhu_min: 25, suhu_max: 34 },
      { hari: "Kamis",   ikon: "⛅",  kondisi: "Berawan",        suhu_min: 24, suhu_max: 32 },
      { hari: "Jumat",   ikon: "🌧️", kondisi: "Hujan",          suhu_min: 23, suhu_max: 30 }
    ]
  }
};

export default weatherData;