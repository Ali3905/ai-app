import Image from "next/image";
import React from "react";

const MockupSection = () => {
  return (
    <div className="mockup_section">
      <div className="left_to_mockup">
        <div>
          <div>
            <Image src="/sq1.avif" width={100} height={500} />
            <Image src="/sq2.avif" width={100} height={500} />
          </div>
          <div>
            <Image src="/pt1.jpg" width={100} height={500} />
            <Image src="/ld1.jpg" width={100} height={500} />
          </div>
        </div>
        <div>
          <div>
            <Image src="/sq3.avif" width={100} height={500} />
            <Image src="/sq4.avif" width={100} height={500} />
          </div>
          <div>
            <Image src="/pt2.png" width={100} height={500} />
            <Image src="/ld2.png" width={100} height={500} />
          </div>
        </div>
        <div>
          <div>
          <Image src="/sq7.jpeg" width={100} height={500} />
            <Image src="/sq8.png" width={100} height={500} />
          </div>
          <div>
            <Image src="/pt7.png" width={100} height={500} />
            <Image src="/ld3.jpg" width={100} height={500} />
          </div>
        </div>
      </div>

      <div className="main_mockup">
        <video src="/mockup.mp4" autoPlay loop muted />
      </div>
      <div className="left_to_mockup">
        <div>
          <div>
            <Image src="/sq1.avif" width={100} height={500} />
            <Image src="/sq2.avif" width={100} height={500} />
          </div>
          <div>
            <Image src="/pt4.png" width={100} height={500} />
            <Image src="/ld4.png" width={100} height={500} />
          </div>
        </div>
        <div>
          <div>
            <Image src="/sq3.avif" width={100} height={500} />
            <Image src="/sq4.avif" width={100} height={500} />
          </div>
          <div>
            <Image src="/pt5.png" width={100} height={500} />
            <Image src="/ld5.png" width={100} height={500} />
          </div>
        </div>
        <div>
          <div>
            <Image src="/sq7.jpeg" width={100} height={500} />
            <Image src="/sq8.png" width={100} height={500} />
          </div>
          <div>
            <Image src="/pt6.png" width={100} height={500} />
            <Image src="/ld6.jpg" width={100} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockupSection;
