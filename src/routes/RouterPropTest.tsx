import { Link } from "react-router-dom";
interface menuProp {
    name:string,
    price:string
}
const RouterPropTest = () => {
    
    const menu:menuProp = {
        name: "짜장면",
        price: "5000",
    };
    return (
        <div>
            <h1>router prop  </h1>
            <Link
                to={{
                    pathname: "/routerproptestresult",
                    state: {
                        menu,
                    },
                }}
            >
                테이터 날리기
            </Link>
        </div>
    );
};

export default RouterPropTest;
