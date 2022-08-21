import React from "react";
import scss from "@/components/worksShowcase/main.module.scss";
import Image, { StaticImageData } from "next/image";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

interface smallProjectProps {
  id: string;
  orderNo: string;
  name: string;
  desc: string;
  deviceIcons: JSX.Element;
  demo: StaticImageData;
  techList: JSX.Element;
  githubLink: string;
}

function SmallProject(props: smallProjectProps) {
  return (
    <div className={scss.contentWrapper}>
      <div id={props.id} className={scss.smallP_wrapper}>
        <div className={scss.smallP_wrapper_left}>
          <div className={scss.works_text}>
            <h4>
              <span className={scss.works_text_number}>{props.orderNo}</span>
              &nbsp; {props.name}
              <span className={scss.works_text_responsiveIcons}>&nbsp; &nbsp; {props.deviceIcons}</span>
            </h4>
            <p className={scss.works_text_desc}>{props.desc}</p>
            <p
              className={scss.works_text_github}
              onClick={() => window.open(props.githubLink, "_blank", "noopener noreferrer")}
            >
              <BsFillArrowRightSquareFill /> &nbsp; View GitHub Repository
            </p>
          </div>
        </div>
        <div className={scss.smallP_wrapper_middle}>
          <div className={scss.works_text}>
            <h4>Built With:</h4>
            <ul>{props.techList}</ul>
          </div>
        </div>
        <div className={scss.smallP_wrapper_right}>
          <Image src={props.demo} alt="App Demo" />
        </div>
      </div>
    </div>
  );
}

export default SmallProject;
