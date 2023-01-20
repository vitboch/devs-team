import React from "react";
import Progress from "./components/common/progress";

const App = () => {
    return (
        <>
            <h1>App</h1>
            <Progress percents="10" name="JavaScript" color="red" />
        </>
    );
};

export default App;
