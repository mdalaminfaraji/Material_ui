export const navbarStyles = {
  drawer: {
    width: 320,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: 320,
      boxSizing: "border-box",
      backgroundColor: "#101f33",
      color: "rgb(255, 255, 255, .7)",
    },
    "& .Mui-selected": {
      color: "red",
    },
  },
  icons: {
    color: "rgb(255, 255, 255, .7)!important",
    marginLeft: "20px",
  },
  text: {
    "&span": {
      marginLeft: "-10px",
      fontWeight: "600px",
      fontSize: "16px",
    },
  },
};
