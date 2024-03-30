import { Chakra_Petch } from "next/font/google";

const ChakraPetchNormal = Chakra_Petch({
  weight: "400",
  subsets: ["latin"],
});

const ChakraPetchBold = Chakra_Petch({
  weight: "700",
  subsets: ["latin"],
});

export default { ChakraPetchNormal, ChakraPetchBold };
