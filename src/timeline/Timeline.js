import React from "react";
import "./Timeline.scss";
import timelinedata from "./data";
import { Image } from "@chakra-ui/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = (props) => {
  return (
    <div id={props.id} className="timeline">
      <div className="header">
        <h1>
          <b>MY JOURNEY</b>
        </h1>
      </div>
      <div className="timeline-container">
        <VerticalTimeline animate={false}>
          {timelinedata.map((data, idx) => {
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#444444",
                  color: "#b1b1b1",
                  boxShadow: "0 3px 0 #b1b1b1",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  #444444",
                }}
                dateClassName="timeline-date"
                date={`${data.firstdate} ${data.finaldate}`}
                iconStyle={{
                  background: "rgb(177, 177, 177)",
                  color: "#b1b1b1",
                }}
                icon={<Image borderRadius="full" src={data.imageSrc} />}
              >
                <span
                  className="tag"
                  style={{ background: data.category.color }}
                >
                  {data.category.tag}
                </span>

                <h3 className="vertical-timeline-element-title">
                  {data.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  {data.orga}
                </h4>
                <p>{data.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </div>
  );
};
export default Timeline;
