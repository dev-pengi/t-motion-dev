import { FC } from "react";

const MeshBg: FC = () => {
  return (
    <>
      <div className="bg-mesh absolute top-0 w-full h-full z-0"></div>
      <div className="bg-white opacity-50 absolute top-0 w-full h-full z-0"></div>
    </>
  );
};

export default MeshBg;
