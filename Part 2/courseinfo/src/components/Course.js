import React from 'react'

const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ parts }) => {
    console.log(parts)
    const exers = []
    for (let part of parts) {
        exers.push(part.exercises)
    }
    const tot = exers.reduce((s, p) => s + p)

    return (
        <p>Number of exercises {tot}</p>
    )
}

const Part = ({ part }) => <p>
    {part.name} {part.exercises}
</p>



const Content = ({ parts }) => {
    const partlist = parts.map(part =>
        <Part key={part.id} part={part} />
      )

    return (
        <div>
            {partlist}
        </div>
    )
}

const Course = ({ key, course }) => {
    console.log(course.parts)
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}
export default Course