import Main from "./Main.js";
import { MAIN_DATA } from "./data.js";

function SecondDataView() {
    return (
        <>
            <Main content={MAIN_DATA[1].content} />
        </>
    );
}

export default SecondDataView;