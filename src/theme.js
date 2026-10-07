import { createTheme } from "@mui/material/styles";

export const colors = {
  white: "#FFFFFF",
  ivory: "#FFFBF2",
  cream: "#F8E8C2",
  gold: "#C99A35",
  ochre: "#8C5E08",
  text: "#594522",
  border: "#E8D4A5",
  viewer: "#2C2112",
  overlay: "rgba(255,251,242,0.9)",
  viewerControl: "rgba(248,232,194,0.12)",
  backdrop: "rgba(44,33,18,0.65)",
  galleryShadow: "0 12px 36px rgba(140,94,8,0.14)",
  modalShadow: "0 20px 60px rgba(89,69,34,0.25)",
};

// Preserve animated GIF frames and transparency while warming their visible colors.
export const assetStyles = {
  goldAnimation: { filter: "sepia(1) saturate(2)" },
};

export const invitationTheme = createTheme({
  palette: {
    primary: { main: colors.ochre, contrastText: colors.white },
    secondary: { main: colors.gold, contrastText: colors.text },
    background: { default: colors.white, paper: colors.ivory },
    text: { primary: colors.text, secondary: colors.text },
    divider: colors.border,
    action: {
      hover: "rgba(201,154,53,0.12)",
      selected: "rgba(201,154,53,0.18)",
      focus: "rgba(140,94,8,0.18)",
      disabled: "rgba(89,69,34,0.55)",
      disabledBackground: colors.cream,
    },
  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          "&.Mui-focusVisible": {
            outline: `3px solid ${colors.ochre}`,
            outlineOffset: 3,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": { color: colors.text, backgroundColor: colors.cream },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: colors.gold,
          "&:hover": { backgroundColor: colors.cream, color: colors.ochre },
          "&.Mui-disabled": { color: colors.border },
        },
      },
    },
    MuiBackdrop: { styleOverrides: { root: { backgroundColor: colors.backdrop } } },
  },
});
