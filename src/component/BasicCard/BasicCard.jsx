import {
  Avatar,
  Box,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Icon } from "@iconify/react";
const BasicCard = ({ icon, title, price, color }) => {
  return (
    <Box width="300px" borderBottom={color} borderRadius="5px">
      <Card
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <CardContent
          sx={{ background: { color }, opacity: ".6", borderRadius: "3px" }}
          component="div"
        >
          <Icon style={{ color: { color }, opacity: "1" }} icon={icon} />
        </CardContent>
        <CardContent component="div">
          <Typography variant="h5" sx={{ opacity: ".7" }}>
            {title}
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {price}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BasicCard;
