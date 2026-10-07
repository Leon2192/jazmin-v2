import { assetStyles, colors } from "../theme";
import { Box, Typography } from "@mui/material";
import ButtonLinks from "./ButtonLinks/ButtonLInks";

const Confirm = () => {
  return (
    <Box
      sx={{
        minHeight: "40vh",
        py: 8,
        px: 2,
        backgroundColor: colors.white,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {/* Contenedor interno */}
      <Box>
        {/* Icono animado */}
        <Box
          component="img"
          src="/assets/asistencia.gif"
          alt=""
          sx={{
            ...assetStyles.goldAnimation,
            width: 125,
            height: 125,
            mb: 1,
          }}
        />

        {/* Título principal cursiva */}
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Catchy'",
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            color: colors.ochre,
            fontWeight: "semibold",
            mb: 2,
          }}
        >
          Confirmación de asistencia
        </Typography>

        {/* Subtítulo más pequeño */}
        <Typography
          variant="body1"
          sx={{
            fontFamily: "'Catchy'",
            fontSize: { xs: "1.2rem", md: "1.5rem" },
            color: colors.text,
            mb: 4,
          }}
        >
          Espero que seas parte de esta gran celebración. ¡Confirmame tu asistencia!
        </Typography>

        {/* Botón */}
        <ButtonLinks
          label="Confirmar Asistencia"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfFvNDAKjk1s-YSRBThHZdTXOboheMzvpMy3c4ICC-4WrWTUw/viewform?pli=1"
          newTab
        />
      </Box>
    </Box>
  );
};

export default Confirm;
