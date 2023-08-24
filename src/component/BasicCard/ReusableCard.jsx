import React from 'react';
import { Card, CardContent, Typography, Button, styled } from '@mui/material';

const CardContainer = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  boxShadow:'20px',
 
  padding: theme.spacing(2),
}));

const IconContainer = styled('div')(({ iconColor }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 50,
  height: 50,
  borderRadius: '10%',
  marginRight:'5px',
  color: iconColor || 'black',
}));

const ReusableCard = ({ icon, iconColor, backgroundColor, title, boldTitle, borderColor }) => {
  return (
    <CardContainer style={{ width:'300px', borderBottom: borderColor||'2px solid black' }}>
      <IconContainer style={{backgroundColor ,  width:'70px'}} iconColor={iconColor}>
        {icon}
      </IconContainer>
      <div style={{marginLeft:'5px'}}>
        <Typography variant="h6" style={{ color: 'black' , opacity:'.7'}}>
          {title}
        </Typography>
        <Typography variant="h6" style={{ color: 'black', fontWeight: 'bold' }}>
          ${boldTitle}
        </Typography>
       
      </div>
    </CardContainer>
  );
};

export default ReusableCard;
