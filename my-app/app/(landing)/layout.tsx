import { BackgroundImage } from "./_components/background-image";
import { NavBar } from "./_components/navbar";

interface LandingLayoutProps {
    children: React.ReactNode;
}

const LandingLayout = ({children}: LandingLayoutProps) => {
    return(
        <>
        < BackgroundImage />
        < NavBar />
            {children}
        </>
    )
}

export default LandingLayout;