import img from "../assets/Frame 1.png";
import Image from "next/image";
export default ({ width = 225 }: { width?: number }) => {
  return <Image src={img} alt={""} width={width} />;
};
