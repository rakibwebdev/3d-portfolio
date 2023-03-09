import React from "react";
import { Text3D, Float, Center, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Logo() {
    return (
        <Canvas>
            <ambientLight intensity={1.0} />
            <React.Suspense fallback={null}>
                <Center>
                    {/* <Float floatIntensity={5} speed={2} position={[0, 1.1, 0]}> */}
                    <Text3D
                        font={
                            "https://drei.pmnd.rs/fonts/helvetiker_regular.typeface.json"
                        }
                        size={1}
                        height={5}
                        bevelEnabled
                        bevelSize={0.03}
                    >
                        Rakib Hossain
                        <meshNormalMaterial />
                    </Text3D>
                    {/* </Float> */}
                    <OrbitControls />
                </Center>
            </React.Suspense>
        </Canvas>
    );
}

export default Logo;
