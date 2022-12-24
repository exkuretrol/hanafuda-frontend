import { useState } from "react";
import Card from "./components/Card";

function App() {
    const [isSelected, setSelected] = useState(false);
    return (
        <div className="App">
            <Card
                image={"./assets/Hanafuda_September_Tanzaku.svg.png"}
                isSelected={isSelected}
                onClick={() => setSelected(!isSelected)}
            />
        </div>
    );
}

export default App;
