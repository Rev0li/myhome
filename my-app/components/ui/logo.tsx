import Image from "next/image";

export const Logo = () => {
    return(
        <Image 
            src={"/logo.png"}
            alt="Logo"
            width={36}
            height={36}
            priority
            className="cursor-pointer w-auto h-auto"
        />
    )
}