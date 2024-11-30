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
          className="vertical-timeline-element--work"
          date="May 2023-Present
          "
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            <br />
            Outlaw Technology
          </h3>

          <h4 className="vertical-timeline-element-subtitle">Remote</h4>

          <p>
            {" "}
            <strong>Software Developer</strong>
            <br /> • Coding a web application in Python, JavaScript, and HTML for the cannabis industry.
            <br /> • Testing and reviewing the RFID Tag Scanner’s Android application in Java.
            <br /> • Utilizing Git in Linux for efficient code management and working with the lead developer.
            <br /> • Managing data and code with AWS.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Aug 2019-April 2023"
          iconStyle={{ background: "#ff0000", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Northeastern University, Khoury College of Computer Sciences
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
          <p>
            {" "}
            <strong>Bachelor of Science</strong> degree in Computer Science and Mathematics.
            <br /> <br /> Courses: Fundamentals of Software Engineering, Object-Oriented Design, Algorithms,
            Artificial Intelligence, Theory of Computation, Discrete Structures, Foundations of Data Science,
            Database Design, Linear Algebra
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--volunteer"
          date="Sep 2022-April 2023"
          iconStyle={{ background: "#E3DE26", color: "#fff" }}
          icon={<VolunteerActivismIcon />}
        >
          <h3 className="vertical-timeline-element-title">NU Trash2Treasure</h3>
          <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
          <p>
            {" "}
            <strong>Fundraising Volunteer</strong>
            <br /> • Served as a committee member; organized annual collection and sale.
            <br /> • Guided people through the sale of donated items to raise a total of $3,000.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--volunteer"
          date="Sept 2021-April 2023"
          iconStyle={{ background: "#E3DE26", color: "#fff" }}
          icon={<VolunteerActivismIcon />}
        >
          <h3 className="vertical-timeline-element-title">NU Mutual Aid</h3>
          <h4 className="vertical-timeline-element-subtitle">Boston, MA</h4>
          <p>
            {" "}
            <strong>Volunteer</strong>
            <br /> • Organized weekly meetings to provide food for the local community fridge.
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
            <br /> • Provided timely, quality, personalized, tech support to hundreds of employees and students.
            <br /> • Prepared and deployed Windows and MacOS computers and guided faculty through setup.
            <br /> • Troubleshot dozens of account, software, and hardware issues tracked through ServiceNow.
            <br /> • Performed staff office desktop setups and classroom audiovisual tech setups, strikes, and tests.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=" July 2021-Dec 2021"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Paragon Data Labs</h3>
          <h4 className="vertical-timeline-element-subtitle">Remote</h4>
          <p>
            <strong>Software Developer Co-op</strong>
            <br /> • Collaborated with a 20-person backend development team on financial compliance software.
            <br /> • Created actions in Java related to customer input and email notification systems.
            <br /> • Automated the transfer of user-provided data to the company database as a data engineer.
            <br /> • Tested the front-end interface to optimize performance and user-friendliness.
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
            <br /> • Launched and maintained a website using WordPress for a small sports business.
            <br /> • Updated descriptive home page, email contact page, and services page daily.
            <br /> • Formulated marketing emails to send out in e-blasts to over 50 people.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
