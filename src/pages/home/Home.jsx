import CustomerFeedback from "./CustomerFeedback";
import Hero from "./Hero";
import OurProducts from "./OurProducts";
import Proccedures from "./Proccedures";

export default function Home(){
    return(
        <>
            <Hero />
            <OurProducts />
            <Proccedures />
            <CustomerFeedback />
        </>
    );
}