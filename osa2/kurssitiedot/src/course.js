import React from 'react';

const Course = ({courses}) => {
    return (
      <div>
        {courses.map((course) =>
            <span key={course.id}>
              <h3>{course.name}</h3>
              <Exercises course={course}/>
              <Total course={course}/>
            </span>
          )}
      </div>
    )
  }
  
  const Exercises = ({course}) => {
    return (
      <div>
        {course.parts.map((part) => 
          <p key={part.id}>
            {part.name}{' '}{part.exercises}
          </p>
        )}
      </div>
    )
  }
  
  const Total = ({course}) => {
    return (
      <b>
      <p key={course.id}>
        total of {course.parts.reduce((acc, curr) => 
          acc + curr.exercises, 0)} exercises
      </p>
      </b>
    )
  }

  export default Course