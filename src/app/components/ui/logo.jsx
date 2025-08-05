import Link from "next/link";
import Image from "next/image";

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex justify-center lg:justify-start ${className}`}>
      <Link
        href="/"
        aria-label="BFIS Logo"
        className="flex justify-center items-center gap-1"
      >
        <Image
          src="/assets/images/logo_w.png" // place logo.png under public/assets/images/
          alt="BFIS Logo"
          width={120} // adjust as per your logo size or use layout='intrinsic'
          height={50}
          className="h-auto w-[80%] sm:w-auto"
          priority
        />
      </Link>
    </div>
  );
};

export default Logo;
