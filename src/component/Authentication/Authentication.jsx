import { Avatar, Box, Card, Grid, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Icon } from '@iconify/react';
import {CommonButton} from '../common/commonButton/CommonButton'
import BasicCard from "../BasicCard/BasicCard";
import { AccessAlarm, FormatAlignJustify, ThreeDRotation } from "@mui/icons-material";
import ReusableCard from "../BasicCard/ReusableCard";

const Authentication = () => {
    const buttonStyles={
        fontSize:20,
        fontWeight:700,
        borderBottom:'2px solid red',
        '&:hover':{
            backgroundColor:'yellow'
        }
         
    }
    const money={
        price1:454566,
        price2:456445654

    };
    return (
        <Grid item xs={8}>
          <CommonButton variant="contained" sx={buttonStyles}>Text</CommonButton>
           <Box color={{borderBottom:"2px solid red", width:"300px" }}>
             
               <List>
                <ListItem>
                    <ListItemAvatar >
                        <Avatar sx={{backgroundColor:'red', opacity:'.5', borderRadius:'10%', textAlign:'center'}}>
                        <Icon color="" sx={{opacity:'1'}} icon="fa6-solid:people-line" />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Photos" secondary="$29349878957"></ListItemText>
                </ListItem>
               </List>
            
            
           </Box>
           <BasicCard
           icon={"fa6-solid:people-line"}
           title={"thsi is mya "}
           price={"02459834578"}
           color={'red'}
           ></BasicCard>

<ReusableCard
        icon={<Icon color="" sx={{opacity:'1'}} icon="fa6-solid:people-line" />}
        iconColor="blue" // Specify icon color here
        backgroundColor="lightblue" // Specify background color here
        title="Card Title"
        boldTitle={money.price2}
       borderColor="2px solid lightblue"
      />
      <ReusableCard
        icon={<ThreeDRotation />}
        iconColor="red" // Specify icon color here
        backgroundColor="pink" // Specify background color here
        title="Another Title"
        boldTitle={money.price1}
        borderColor="2px solid pink"
      />
        </Grid>
    );
};

export default Authentication;