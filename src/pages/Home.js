import Columnstatus from "../components/colunmstatus";
import Header from "../components/header";

export default function Home(){
    return(
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}} >
            <Header />
            <Columnstatus name="ABERTOS"/>
        </div>
    )
}