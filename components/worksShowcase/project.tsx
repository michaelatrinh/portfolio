import React from "react";
import scss from "@/components/worksShowcase/main.module.scss";
import Image, { StaticImageData } from "next/image";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

interface ProjectProps {
  id: string;
  orderNo: string;
  name: string;
  desc: string;
  deviceIcons: JSX.Element;
  logo: JSX.Element;
  demo: StaticImageData;
  techList: JSX.Element;
  githubLink: string;
}

function Project(props: ProjectProps) {
  return (
    <div className={scss.contentWrapper}>
      <div id={props.id}>
        <div className={scss.leftWrapper}>
          <div className={scss.works_text} data-scroll data-scroll-speed="-2">
            <h4>
              <span className={scss.works_text_number}>{props.orderNo}</span>
              &nbsp; {props.name}
              <span className={scss.works_text_responsiveIcons}>&nbsp; &nbsp; {props.deviceIcons}</span>
            </h4>
            <p>{props.desc}</p>
          </div>
        </div>
        <div className={scss.rightWrapper}>
          <div className={scss.works_logoWrapper} data-scroll data-scroll-speed="2">
            {props.logo}
          </div>
        </div>
      </div>

      <div className={scss.div_spacer}>
        <div className={scss.leftWrapper}>
          <div className={scss.works_screens} data-scroll data-scroll-speed="2">
            <Image src={props.demo} alt="App Demo" />
          </div>
        </div>
        <div className={scss.rightWrapper}>
          <div className={scss.works_text} data-scroll data-scroll-speed="0.25">
            <h4>Built With:</h4>
            <ul>{props.techList}</ul>
            <p onClick={() => window.open(props.githubLink, "_blank", "noopener noreferrer")}>
              <BsFillArrowRightSquareFill /> &nbsp; View GitHub Repository
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
