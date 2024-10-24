import {
  Box,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
const colors = {
  lightPurple: "#5B4FB9",
  mediumPurple: "#2F3349",
  darkPurple: "#25293C",
  white: "#FFFFFF",
};
import { featuresPricings } from "../utils/feauresPricings";
import { formatCurrencyARS } from "../utils/currency";
export const PricingCard = ({
  option,
  highlighted = false,
  period = "mes",
}: {
  option: string;
  highlighted?: boolean;
  period?: string;
}) => {
  const feature = featuresPricings[option];
  return (
    <Card
      elevation={highlighted ? 8 : 3}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: highlighted ? `2px solid ${colors.lightPurple}` : "none",
        borderRadius: 2,
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          variant="h4"
          component="h3"
          gutterBottom
          color="primary"
          textAlign={"center"}
        >
          {feature.title}
        </Typography>
        <Typography
          variant="h5"
          component="p"
          gutterBottom
          textAlign={"center"}
        >
          {period === "mes"
            ? formatCurrencyARS.format(feature.price)
            : formatCurrencyARS.format(feature.priceWithDiscount)}
          <Typography
            variant="subtitle1"
            component="span"
            sx={{
              color: colors.lightPurple,
              fontWeight: "bold",
            }}
          >
            /{period}
          </Typography>
        </Typography>
        <List>
          {feature.features.map((feature: string, index: number) => (
            <ListItem key={index} disablePadding>
              <ListItemText primary={feature} />
            </ListItem>
          ))}
        </List>
      </CardContent>
      <Box p={2}>
        <Button
          variant={highlighted ? "contained" : "outlined"}
          color="primary"
          fullWidth
        >
          Elegir Plan
        </Button>
      </Box>
    </Card>
  );
};
