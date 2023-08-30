import { Grid } from "@mui/material";

import { CommonButton } from "../common/commonButton/CommonButton";

const Authentication = () => {
  const buttonStyles = {
    fontSize: 20,
    fontWeight: 700,
    borderBottom: "2px solid red",
    "&:hover": {
      backgroundColor: "yellow",
    },
  };

  return (
    <Grid item xs={9}>
      <CommonButton variant="contained" sx={buttonStyles}>
        Text
      </CommonButton>
    </Grid>
  );
};

export default Authentication;
