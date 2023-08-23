import { Grid } from "@mui/material";
import {CommonButton} from '../common/commonButton/CommonButton'
const Authentication = () => {
    const buttonStyles={
        fontSize:20,
        fontWeight:700,
        borderBottom:'2px solid red'
      
    }
    return (
        <Grid item xs={8} color={{color:'red'}}>
          <CommonButton sx={buttonStyles}>Text</CommonButton>
        </Grid>
    );
};

export default Authentication;