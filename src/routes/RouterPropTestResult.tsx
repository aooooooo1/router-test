interface propTypes {
    location:{
        state:{
            menu:{
                name:string,
                price:string
            }
        }
    }
}
const RouterPropTestResult = (props:propTypes) => {
    const name = props.location.state.menu.name 
    const price = props.location.state.menu.price
    return (
        <div>
            <h1>결과</h1>
            <p>{name}</p>
            <p>{price}</p>
        </div>
    );
};

export default RouterPropTestResult;
