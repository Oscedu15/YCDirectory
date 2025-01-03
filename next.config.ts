import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
    //dangerouslyAllowSVG para permitir que la imagen de svg recibida se establezca
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
      // Aqui configuramos el accseso a las imagenes, desde otras paginas. Colocamos asteristico, para permitir las imagenes de todas las fuentes
    ],
  },
  //Configuracion para aparecer componentes de forma dinamica
  experimental: {
    ppr: "incremental",
    after: true,
  },
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },
};

export default nextConfig;
