import turkey from "../images/turkey.png";
import feather1 from "!file-loader!../images/feather1.svg";
import feather2 from "!file-loader!../images/feather2.svg";
import feather3 from "!file-loader!../images/feather3.svg";
import feather4 from "!file-loader!../images/feather4.svg";
import feather5 from "!file-loader!../images/feather5.svg";
import feather6 from "!file-loader!../images/feather6.svg";
import feather7 from "!file-loader!../images/feather7.svg";
import feather8 from "!file-loader!../images/feather8.svg";
import feather9 from "!file-loader!../images/feather9.svg";
import featherA from "!file-loader!../images/featherA.svg";
import { useEffect } from "react";

const feathers = [
  feather1,
  feather2,
  feather3,
  feather4,
  feather5,
  feather6,
  feather7,
  feather8,
  feather9,
  featherA,
];

function PictureDisplay ({ size, featherCount, featherColors }) {
  // useEffect(() => {
  //   console.log('PictureDisplay', size, featherCount, featherColors);
  // }, [size, featherCount, featherColors]);
  useEffect(() => {
    console.log("PictureDisplay size", size);
  }, [size]);

  useEffect(() => {
    console.log("PictureDisplay feather count", featherCount);
  }, [featherCount]);

  useEffect(() => {
    console.log("PictureDisplay feather colors", featherColors);
  }, [featherColors]);

  // TODO: Wrap in useEffect
  const colors = [];
  if (!featherColors || featherColors.length === 0) featherColors = [''];
  for (let i=0; i<featherCount; i++) {
    colors.push(featherColors[i % featherColors.length]);
  }

  return (
    <div className={`image-area medium`}>
      {colors.map((c, i) =>
        <img  
          key={feathers[i]} 
          src={feathers[i]} 
          className={`image-feather ${c}`} 
          alt="" 
        />
      )}

      <img src={turkey} className="image-turkey" alt="turkey" />
    </div>
  );
}

export default PictureDisplay;