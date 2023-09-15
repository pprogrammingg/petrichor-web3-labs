import styles from './taskList.module.css'
import Task from '../Task/Task'

interface TaskListProps {
  taskList: any[] // Replace 'any' with the appropriate type for your task items
}

function TaskList({ taskList }: TaskListProps) {
  return (
    <>
      <h1> Your available tasks are:</h1>
      {taskList.map((_, index) => (
        <Task taskText="simple task" key={index} />
      ))}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla,
        libero ut varius porttitor, orci mauris euismod quam, ut ullamcorper
        nulla nunc id mauris. Morbi quis orci id velit pellentesque aliquet ac
        in justo. Suspendisse potenti. Duis non facilisis velit, in hendrerit
        metus. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Fusce sollicitudin gravida odio, vel
        fermentum ligula malesuada vitae. Nulla facilisi. Duis interdum odio
        vitae augue malesuada, in dignissim ipsum sollicitudin. Donec maximus
        odio in nulla blandit, at venenatis augue consectetur. Vivamus euismod
        blandit nunc nec finibus. Curabitur eu justo eu purus blandit
        sollicitudin. Vivamus nec interdum nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla,
        libero ut varius porttitor, orci mauris euismod quam, ut ullamcorper
        nulla nunc id mauris. Morbi quis orci id velit pellentesque aliquet ac
        in justo. Suspendisse potenti. Duis non facilisis velit, in hendrerit
        metus. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Fusce sollicitudin gravida odio, vel
        fermentum ligula malesuada vitae. Nulla facilisi. Duis interdum odio
        vitae augue malesuada, in dignissim ipsum sollicitudin. Donec maximus
        odio in nulla blandit, at venenatis augue consectetur. Vivamus euismod
        blandit nunc nec finibus. Curabitur eu justo eu purus blandit
        sollicitudin. Vivamus nec interdum nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla,
        libero ut varius porttitor, orci mauris euismod quam, ut ullamcorper
        nulla nunc id mauris. Morbi quis orci id velit pellentesque aliquet ac
        in justo. Suspendisse potenti. Duis non facilisis velit, in hendrerit
        metus. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Fusce sollicitudin gravida odio, vel
        fermentum ligula malesuada vitae. Nulla facilisi. Duis interdum odio
        vitae augue malesuada, in dignissim ipsum sollicitudin. Donec maximus
        odio in nulla blandit, at venenatis augue consectetur. Vivamus euismod
        blandit nunc nec finibus. Curabitur eu justo eu purus blandit
        sollicitudin. Vivamus nec interdum nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla,
        libero ut varius porttitor, orci mauris euismod quam, ut ullamcorper
        nulla nunc id mauris. Morbi quis orci id velit pellentesque aliquet ac
        in justo. Suspendisse potenti. Duis non facilisis velit, in hendrerit
        metus. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Fusce sollicitudin gravida odio, vel
        fermentum ligula malesuada vitae. Nulla facilisi. Duis interdum odio
        vitae augue malesuada, in dignissim ipsum sollicitudin. Donec maximus
        odio in nulla blandit, at venenatis augue consectetur. Vivamus euismod
        blandit nunc nec finibus. Curabitur eu justo eu purus blandit
        sollicitudin. Vivamus nec interdum nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla,
        libero ut varius porttitor, orci mauris euismod quam, ut ullamcorper
        nulla nunc id mauris. Morbi quis orci id velit pellentesque aliquet ac
        in justo. Suspendisse potenti. Duis non facilisis velit, in hendrerit
        metus. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Fusce sollicitudin gravida odio, vel
        fermentum ligula malesuada vitae. Nulla facilisi. Duis interdum odio
        vitae augue malesuada, in dignissim ipsum sollicitudin. Donec maximus
        odio in nulla blandit, at venenatis augue consectetur. Vivamus euismod
        blandit nunc nec finibus. Curabitur eu justo eu purus blandit
        sollicitudin. Vivamus nec interdum nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla,
        libero ut varius porttitor, orci mauris euismod quam, ut ullamcorper
        nulla nunc id mauris. Morbi quis orci id velit pellentesque aliquet ac
        in justo. Suspendisse potenti. Duis non facilisis velit, in hendrerit
        metus. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Fusce sollicitudin gravida odio, vel
        fermentum ligula malesuada vitae. Nulla facilisi. Duis interdum odio
        vitae augue malesuada, in dignissim ipsum sollicitudin. Donec maximus
        odio in nulla blandit, at venenatis augue consectetur. Vivamus euismod
        blandit nunc nec finibus. Curabitur eu justo eu purus blandit
        sollicitudin. Vivamus nec interdum nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla,
        libero ut varius porttitor, orci mauris euismod quam, ut ullamcorper
        nulla nunc id mauris. Morbi quis orci id velit pellentesque aliquet ac
        in justo. Suspendisse potenti. Duis non facilisis velit, in hendrerit
        metus. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Fusce sollicitudin gravida odio, vel
        fermentum ligula malesuada vitae. Nulla facilisi. Duis interdum odio
        vitae augue malesuada, in dignissim ipsum sollicitudin. Donec maximus
        odio in nulla blandit, at venenatis augue consectetur. Vivamus euismod
        blandit nunc nec finibus. Curabitur eu justo eu purus blandit
        sollicitudin. Vivamus nec interdum nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla,
        libero ut varius porttitor, orci mauris euismod quam, ut ullamcorper
        nulla nunc id mauris. Morbi quis orci id velit pellentesque aliquet ac
        in justo. Suspendisse potenti. Duis non facilisis velit, in hendrerit
        metus. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Fusce sollicitudin gravida odio, vel
        fermentum ligula malesuada vitae. Nulla facilisi. Duis interdum odio
        vitae augue malesuada, in dignissim ipsum sollicitudin. Donec maximus
        odio in nulla blandit, at venenatis augue consectetur. Vivamus euismod
        blandit nunc nec finibus. Curabitur eu justo eu purus blandit
        sollicitudin. Vivamus nec interdum nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla,
        libero ut varius porttitor, orci mauris euismod quam, ut ullamcorper
        nulla nunc id mauris. Morbi quis orci id velit pellentesque aliquet ac
        in justo. Suspendisse potenti. Duis non facilisis velit, in hendrerit
        metus. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Fusce sollicitudin gravida odio, vel
        fermentum ligula malesuada vitae. Nulla facilisi. Duis interdum odio
        vitae augue malesuada, in dignissim ipsum sollicitudin. Donec maximus
        odio in nulla blandit, at venenatis augue consectetur. Vivamus euismod
        blandit nunc nec finibus. Curabitur eu justo eu purus blandit
        sollicitudin. Vivamus nec interdum nulla.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla,
        libero ut varius porttitor, orci mauris euismod quam, ut ullamcorper
        nulla nunc id mauris. Morbi quis orci id velit pellentesque aliquet ac
        in justo. Suspendisse potenti. Duis non facilisis velit, in hendrerit
        metus. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Fusce sollicitudin gravida odio, vel
        fermentum ligula malesuada vitae. Nulla facilisi. Duis interdum odio
        vitae augue malesuada, in dignissim ipsum sollicitudin. Donec maximus
        odio in nulla blandit, at venenatis augue consectetur. Vivamus euismod
        blandit nunc nec finibus. Curabitur eu justo eu purus blandit
        sollicitudin. Vivamus nec interdum nulla.
      </p>
    </>
  )
}

export default TaskList
