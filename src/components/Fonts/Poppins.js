import { Poppins } from "next/font/google";

const PoppinsNormal = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const PoppinsMedium = Poppins({
  weight: "500",
  subsets: ["latin"],
});

const PoppinsBold = Poppins({
  weight: "700",
  subsets: ["latin"],
});

export default { PoppinsNormal, PoppinsMedium, PoppinsBold };
