import { Box, Typography } from "@mui/material";
import EngineeringIcon from "@mui/icons-material/Engineering";
const UnderConstruction = () => {
  return (
    <Box sx={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center",justifyContent:'center' }}>
        <EngineeringIcon fontSize="large" color="warning" sx={{fontSize:200,ml:5}}/>
        <Typography sx={{color:'warning.main'}} variant='h6'>Ne pare rau... </Typography>
        <Typography sx={{color:'warning.main'}} variant='h6'>Pagina aceasta inca hiberneaza {":("}</Typography>
      </Box>
    </Box>
  );
};

export default UnderConstruction;
