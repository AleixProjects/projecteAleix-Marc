module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts}", "./app/*"],
  theme: {
    extend: {
      height: {
        'screen-minus-135': 'calc(100vh - 135px)',
      },
    },
    colors: {
      beix: "#fefae0",
      verdClar: "#606c38",
      verdFosc: "#283618",
      taronjaFosc: "#bc6c25",
      taronjaClar: "#dda15e",
      vermell: "#B00020",
      blanc: "#FFFFFF"
    },
    fontFamily: {
      ubuntu: "Ubuntu",
    },
  },
  plugins: [],
};
