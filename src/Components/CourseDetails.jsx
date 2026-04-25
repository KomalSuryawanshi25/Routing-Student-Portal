import React, { Component } from "react";

class CourseDetails extends Component {
  render() {
    
    const id = window.location.pathname.split("/")[2];

    const course = this.props.courses.find(
      (c) => c.id === parseInt(id)
    );

    if (!course) {
      return (
        <div className="container mt-5 text-center">
          <h3 className="text-danger">Course Not Found</h3>
        </div>
      );
    }

    return (
      <div className="container mt-5 text-center">
        <div className="card p-4 shadow">
          <h2>{course.name}</h2>
          <p>Duration: {course.duration}</p>
          <h4 className="text-success">₹ {course.price}</h4>

         
          <button
            className="btn btn-success mt-3"
            onClick={() =>
              this.props.onEnroll(course.name)
            }
          >
            Enroll Now
          </button>
        </div>
      </div>
    );
  }
}

export default CourseDetails;