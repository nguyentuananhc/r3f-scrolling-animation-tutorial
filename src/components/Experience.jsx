import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office";
import { Duy } from "./Test";
import { Overlay } from "./Overlay";

// export const Experience = () => {
//   return (
//     <>
//       <ambientLight intensity={1} />
//       <OrbitControls enableZoom={false} />
//       <ScrollControls pages={3} damping={0.25}>
//         <Overlay />
//         {/* <Office /> */}
//         <Duy />
//       </ScrollControls>
//     </>
//   );
// };

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} />
      <Duy />
    </>
  );
};
