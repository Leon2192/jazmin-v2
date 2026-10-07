import { colors } from "../../theme";
import { Box, IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { invitation } from "../../config/invitation";

const Hero = () => {
  return (
    <Box component="header" sx={{ position: "relative", display: "flex", justifyContent: "center", width: "100%", m: 0, p: 0, background: `linear-gradient(90deg, ${colors.ivory}, ${colors.white} 35%, ${colors.white} 65%, ${colors.ivory})`, overflow: "hidden" }}>
      <Box component="h1" sx={{ position: "absolute", width: "1px", height: "1px", p: 0, m: -1, overflow: "hidden", clipPath: "inset(50%)", whiteSpace: "nowrap" }}>
        Mis 15 {invitation.name}
      </Box>
      <Box component="img" src={invitation.cover} alt={"Invitación a Mis 15 de " + invitation.name} width={941} height={1672} fetchPriority="high" sx={{ width: "100%", maxWidth: "calc(100svh * 941 / 1672)", height: "auto", display: "block" }} />
      <IconButton component="a" href="#info" aria-label="Ver la invitación" sx={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)", color: colors.ochre, backgroundColor: colors.overlay, "&:hover": { backgroundColor: colors.white } }}>
        <KeyboardArrowDownIcon fontSize="large" />
      </IconButton>
    </Box>
  );
};

export default Hero;
