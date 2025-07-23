
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex gap-1 justify-center items-center">

      <span className="text-white text-xl font-bold">Hipertrof</span>
      <span className="text-white bg-[#e63946] px-1 rounded-md text-xl font-bold">IA</span>
    </Link>
  );
};

export default Logo;
