import { Box, Typography, Button, Stack } from "@mui/material";

const ComingSoon = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f172a 0%, #020617 100%)",
        color: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Stack spacing={3} alignItems="center">
        {/* Icon */}
        <Box
          sx={{
            background: "linear-gradient(135deg, #38bdf8, #6366f1)",
            borderRadius: "50%",
            p: 2,
            mb: 1,
          }}
        ></Box>

        {/* Company Name */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            letterSpacing: "1px",
          }}
        >
          Racquel Builds
        </Typography>

        {/* Tagline */}
        <Typography
          variant="h6"
          sx={{
            maxWidth: "500px",
            color: "#94a3b8",
          }}
        >
          Custom websites, modern design, and AI-powered automation for growing
          businesses.
        </Typography>

        {/* Coming Soon */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 300,
            mt: 2,
          }}
        >
          Coming Soon
        </Typography>

        {/* CTA Button */}
        <Button
          variant="contained"
          href="mailto:info@raquelbuilds.com"
          sx={{
            mt: 2,
            background: "linear-gradient(135deg, #38bdf8, #6366f1)",
            px: 4,
            py: 1.5,
            fontSize: "16px",
            fontWeight: 600,
            borderRadius: "30px",
            textTransform: "none",
            "&:hover": {
              opacity: 0.9,
            },
          }}
        >
          Contact Us
        </Button>

        {/* Footer */}
        <Typography
          sx={{
            position: "absolute",
            bottom: 20,
            fontSize: "14px",
            color: "#475569",
          }}
        >
          © {new Date().getFullYear()} Racquel Builds
        </Typography>
      </Stack>
    </Box>
  );
};

export default ComingSoon;
