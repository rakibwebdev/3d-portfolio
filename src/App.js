import { Canvas } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import Background from "./Background/Background";
import Overlay from "./Overlay/Overlay";

function App() {
    const siteBg = useRef();

    useEffect(() => {
        siteBg.current.height = "500";
    }, []);

    return (
        <>
            <Canvas camera={{ position: [0, 0, 1] }} ref={siteBg}>
                <Background />
            </Canvas>
            <Overlay />
        </>
    );
}

export default App;
