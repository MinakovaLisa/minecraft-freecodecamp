import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Ground } from "./component/Ground";
import { PLayer } from "./component/Player";

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <Physics>
          <PLayer />
          <Ground />
        </Physics>
      </Canvas>
    </>
  );
}

export default App;
