import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import pictUser from "../../../public/User.png"


export const Hero = () => {
    return(
        <section className="  w-full flex items-center justify-center h-[calc(100%-60px)]  " >
            <div className="flex flex-col-reverse md:flex-row items-center   w-full justify-between p-11 ">
                <HeroLeft/>
                <HeroRight/>
            </div>

        </section>

    )
}

const HeroLeft = () => {
    return(

        <div className="flex flex-col justify-between  ">
            <div className="flex flex-col space-y-6 select-none">
                <h1 className="font-bold text-[45px] leading-[60px] "> 
                    Welcome to <br/> 
                    My Hub <br/> 
                        <span className="text-[#6841DA]"> 
                            My Univers
                        </span> 
                </h1>
                <p className="text-xs font-light">Welcome on my private Hub, discovery all of me and my activities <br/>
                Stay curious 
                </p>
                <div className="flex gap-6">
                    <Button variant={"secondary"} size={"lg"} >
                        Book a call
                    </Button>
                    <Button variant={"primary"} size={"lg"} >
                        Call me 
                    </Button>
                </div>
            </div>

            <div>

            </div>
        </div>
    )
}

const HeroRight = () => {
    return(

        <Image
        src={pictUser}
        alt="Photo de Oliver"
        width={450}
        height={450}
        priority
        />
    )
}