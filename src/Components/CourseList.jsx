import React, { Component } from "react";
import CourseCard from "./CourseCard";

class CourseList extends Component {
  render() {
    return (
      <div className="container mt-5">
        <h2 className="text-center mb-4">Courses</h2>

       
        <div className="row g-3">
          {this.props.courses.map((course) => (
            <div className="col-md-4" key={course.id}>
              <CourseCard course={course} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CourseList;
