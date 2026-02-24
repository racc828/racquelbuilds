import { Box, Container, Typography, Button } from "@mui/material";

import logo from "../assets/glowlogo.png"; // <-- update path/name

export default function ComingSoon() {
  const year = new Date().getFullYear();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        px: { sm: 2 },
        py: { sm: 6 },
        color: "white",
        position: "relative",
        overflow: "hidden",

        // Deep space base + vignette
        background:
          "radial-gradient(1200px 900px at 50% 35%, rgba(25, 132, 220, 0.35) 0%, rgba(6, 16, 29, 1) 55%, rgba(5, 10, 18, 1) 100%)",
      }}
    >
      {/* Star field layer */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.55,
          backgroundImage: `
            radial-gradient(circle at 15% 30%, rgba(255,255,255,0.55) 0 1px, transparent 2px),
            radial-gradient(circle at 35% 60%, rgba(255,255,255,0.45) 0 1px, transparent 2px),
            radial-gradient(circle at 70% 25%, rgba(255,255,255,0.40) 0 1px, transparent 2px),
            radial-gradient(circle at 82% 55%, rgba(255,255,255,0.35) 0 1px, transparent 2px),
            radial-gradient(circle at 55% 75%, rgba(255,255,255,0.30) 0 1px, transparent 2px)
          `,
          backgroundSize: "320px 220px",
          filter: "blur(0.2px)",
        }}
      />

      {/* Light streaks */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          opacity: 0.65,
          backgroundImage: `
            radial-gradient(800px 260px at 18% 72%, rgba(90, 220, 255, 0.22), transparent 60%),
            radial-gradient(900px 300px at 88% 60%, rgba(90, 220, 255, 0.16), transparent 62%),
            linear-gradient(140deg, transparent 0%, rgba(80, 200, 255, 0.20) 45%, transparent 55%),
            linear-gradient(20deg, transparent 0%, rgba(60, 150, 255, 0.14) 45%, transparent 55%)
          `,
          filter: "blur(0.6px)",
        }}
      />

      <Container maxWidth="sm" sx={{ position: "relative" }}>
        {/* Outer neon frame */}
        <Box
          sx={{
            borderRadius: 6,
            p: { xs: 1.5, sm: 2 },
            position: "relative",
            background:
              "linear-gradient(180deg, rgba(140, 235, 255, 0.20), rgba(40, 140, 255, 0.08))",
            boxShadow:
              "0 0 0 1px rgba(140, 235, 255, 0.25), 0 0 60px rgba(55, 180, 255, 0.25)",
          }}
        >
          {/* Inner glow border */}
          <Box
            sx={{
              borderRadius: 5,
              px: { xs: 2.5, sm: 3 },
              pb: { xs: 2, sm: 2.5 },
              backgroundColor: "rgba(2, 22, 40, 0.55)",
              border: "1px solid rgba(160, 245, 255, 0.18)",
              backdropFilter: "blur(10px)",
              boxShadow:
                "inset 0 0 0 1px rgba(255,255,255,0.06), 0 18px 80px rgba(0,0,0,0.55)",
              animation: "floaty 6s ease-in-out infinite",
              "@keyframes floaty": {
                "0%, 100%": { transform: "translateY(0px)" },
                "50%": { transform: "translateY(-6px)" },
              },
            }}
          >
            {/* Logo */}
            <Box
              component="img"
              src={logo}
              alt="Racquel Builds"
              sx={{
                width: { xs: "78%", sm: "68%" },
                maxWidth: 420,
                height: "auto",
                display: "block",
                mx: "auto",
                mt: 0.5,
                mb: 2,
                filter:
                  "drop-shadow(0 0 22px rgba(120, 240, 255, 0.35)) drop-shadow(0 18px 40px rgba(0,0,0,0.55))",
              }}
            />

            {/* Title */}
            <Typography
              sx={{
                textAlign: "center",
                fontSize: { xs: 32, sm: 44 },
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: 500,
                color: "rgba(220, 250, 255, 0.92)",
                textShadow: "0 0 18px rgba(120, 240, 255, 0.22)",
                mb: 0.8,
              }}
            >
              RACQUEL BUILDS
            </Typography>

            {/* Coming Soon */}
            <Typography
              sx={{
                textAlign: "center",
                fontSize: { xs: 24, sm: 32 },
                fontFamily:
                  'ui-serif, Georgia, "Times New Roman", Times, serif',
                color: "rgba(230, 255, 255, 0.88)",
                textShadow: "0 0 14px rgba(120, 240, 255, 0.18)",
                mb: 1.8,
              }}
            >
              Coming Soon!
            </Typography>

            {/* Tagline */}
            <Typography
              sx={{
                textAlign: "center",
                color: "rgba(210, 245, 255, 0.70)",
                letterSpacing: "0.08em",
                fontSize: { xs: 12, sm: 14 },
                mb: 1.5,
              }}
            >
              Web Design • Modern Development
            </Typography>

            {/* Dot + line */}
            <Box
              sx={{
                display: "grid",
                placeItems: "center",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  width: "82%",
                  height: 1,
                  background:
                    "linear-gradient(90deg, transparent, rgba(180, 245, 255, 0.22), transparent)",
                }}
              />
            </Box>

            {/* Body text */}
            <Typography
              sx={{
                textAlign: "center",
                color: "rgba(200, 240, 255, 0.35)",
                fontSize: { xs: 12.5, sm: 13.5 },
              }}
            >
              A new site is being built. Want to collaborate or request a quote?
            </Typography>

            <Button
              variant="contained"
              size="large"
              onClick={() =>
                window.location.assign("mailto:racquelbuilds@gmail.com")
              }
              sx={{
                borderRadius: 2,
                px: 3,
                my: 2,
                fontWeight: 700,
                textTransform: "none",
                background:
                  "linear-gradient(180deg, rgba(110, 235, 255, 0.95), rgba(30, 150, 255, 0.95))",
                boxShadow:
                  "0 10px 28px rgba(60, 200, 255, 0.25), 0 0 0 1px rgba(170, 245, 255, 0.22)",
                "&:hover": {
                  background:
                    "linear-gradient(180deg, rgba(130, 245, 255, 1), rgba(40, 170, 255, 1))",
                },
              }}
            >
              Contact Me
            </Button>

            <Typography
              sx={{
                textAlign: "center",
                fontSize: 11,
                color: "rgba(200, 240, 255, 0.18)",
              }}
            >
              © {year} Racquel Builds. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
