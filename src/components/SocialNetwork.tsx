import { Box, Typography } from "@mui/material";

export const SocialNetwork = ({
  title,
  Icon,
  link,
}: {
  title: string;
  Icon: React.ElementType;
  link: string;
}) => {
  return (
    <Box
      component={"a"}
      href={link}
      target="_blank"
      display="flex"
      gap={2}
      alignItems={"center"}
      sx={{
        textDecoration: "none",
        color: "whitesmoke",
      }}
    >
      <Icon />
      <Typography variant="body2">{title}</Typography>
    </Box>
  );
};
