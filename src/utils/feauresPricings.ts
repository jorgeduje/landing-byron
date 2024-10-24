export const featuresPricings: Record<
  string,
  {
    price: number;
    priceWithDiscount: number;
    features: string[];
    title: string;
  }
> = {
  basic: {
    price: 24000,
    priceWithDiscount: 230400,
    features: [
      "Menú QR",
      "Ordenar y pagar desde Menú y Mesas",
      "Sin límite de máquinas conectadas",
      "Impresión automática en comandas",
      "Arqueo de caja",

      "Mapa de mesas",
      "Monitoreo en tiempo real de ventas y órdenes",
      "Gestión del menú en tiempo real",
    ],
    title: "Básico",
  },
  pro: {
    price: 29000,
    priceWithDiscount: 278400,
    features: [
      "Todas las funcionalidades de Básico mas:",
      "Códigos de descuento",
      "Estadísticas y métricas",
      "Variedad de Templates de Menú",
      "Gestión de reembolsos",
      "Carga simplificada del menú",
      "Banco de imágenes",
      "Administración del personal",
      "Roles de usuario",
      "Soporte por email y WhatsApp",
    ],
    title: "Pro",
  },
  Enterprise: {
    price: 48000,
    priceWithDiscount: 460800,
    features: [
      "Soporte por teléfono",
      "Onboarding personalizado",
      "Comercial asignado para consultas en vivo",
      "Facturación online",
    ],
    title: "Empresarial",
  },
};
