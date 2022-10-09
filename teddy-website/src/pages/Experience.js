import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug 2019-Present, Expected April 2023"
          iconStyle={{ background: "#ff0000", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Northeastern University, Khoury College of Computer Sciences
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
          <p>
            {" "}
            <strong>Candidate for a Bachelor of Science</strong> degree in
            Computer Science and Mathematics.
            <br /> Related courses: Fundamentals of Software Engineering,
            Algorithms and Data, Artificial Intelligence, OOD, Theory of
            Computation, Discrete Structures, Foundations of Data Science,
            Linear Algebra
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--volunteer"
          date="Sep 2022-Present"
          iconStyle={{ background: "#E3DE26", color: "#fff" }}
          icon={<VolunteerActivismIcon />}
        >
          <h3 className="vertical-timeline-element-title">NU Trash2Treasure</h3>
          <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
          <p>
            {" "}
            <strong>Fundraising Volunteer</strong>
            <br /> • Served as a committee member; organized annual collection
            and sale. <br /> • Guided people through the sale of donated items
            to raise a total of $3,000.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--volunteer"
          date="Sept 2021-Present"
          iconStyle={{ background: "#E3DE26", color: "#fff" }}
          icon={<VolunteerActivismIcon />}
        >
          <h3 className="vertical-timeline-element-title">NU Mutual Aid</h3>
          <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
          <p>
            {" "}
            <strong>Volunteer</strong>
            <br /> • Organized weekly meetings to provide food for the local
            community fridge.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="July 2022-Dec 2022
          "
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            <br />
            Harvard Law School
          </h3>

          <h4 className="vertical-timeline-element-subtitle">Cambridge, MA</h4>

          <p>
            {" "}
            <strong>IT and Audiovisual Support Co-op</strong>
            <br />
            • Provided timely, quality support to hundreds of customers with
            personalized solutions. <br /> • Assisted over 100 professors with
            classroom and office technology in person and remotely. <br /> •
            Organized tasks and monitored incoming service channels for customer
            requests.
            <br /> • Troubleshot dozens of software, hardware, and networking
            issues.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=" July 2021-Dec 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Paragon Data Labs</h3>
          <h4 className="vertical-timeline-element-subtitle">Wilton, CT</h4>
          <p>
            <strong>Software Developer Co-op</strong>
            <br />
            • Collaborated with a 20-person backend development team on
            financial compliance software. <br /> • Automated the transfer of
            user-provided data to the company database as a data engineer.{" "}
            <br /> • Created actions related to customer input and email
            notification systems using Java. <br /> • Tested the user interface
            to optimize performance and user-friendliness.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2018-Dec 2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">RV Tennis</h3>
          <h4 className="vertical-timeline-element-subtitle">Norwalk, CT</h4>
          <p>
            <strong>Website Developer</strong>
            <br />
            • Created and maintained a website and schedule for a small sports
            business.
            <br /> • Updated descriptive home page, email contact page, and
            services page daily. <br /> • Formulated marketing emails to send
            out in e-blasts to over 50 people.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
