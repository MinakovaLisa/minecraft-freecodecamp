import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Ground } from "./component/Ground";
import { PLayer } from "./component/Player";
import { FPV } from "./component/FPV";
import { Cubes } from "./component/Cubes";
import { TextureSelector } from "./component/TextureSelector";
import { Menu } from "./component/Menu";

function App() {
  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <FPV />
        <Physics>
          {/*   Cubes - размещаем в физике, т.к.есть взаимодействие */}
          <PLayer />
          <Cubes />
          <Ground />
        </Physics>
      </Canvas>
      <div className="absolute centered cursor">+</div>
      <TextureSelector />
      <Menu />
    </>
  );
}

export default App;
