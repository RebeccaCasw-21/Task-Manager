import { useEffect, useState } from "react"
import { v4 as uuid } from "uuid"
import { Task } from "./models/Task"
import { getTasks, saveTasks } from "./services/taskService"

import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"

function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    setTasks(getTasks())
  }, [])

  useEffect(() => {
    saveTasks(tasks)
  }, [tasks])

  const addTask = (title: string) => {
    const newTask: Task = {
      id: uuid(),
      title,
      completed: false,
      createdAt: new Date(),
    }

    setTasks([...tasks, newTask])
  }

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    )
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id))
  }

  return (
    <div style={{ maxWidth: 600, margin: "40px auto" }}>
      <h1>Task Manager</h1>

      <TaskForm onAdd={addTask} />

      <TaskList
        tasks={tasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
      />
    </div>
  )
}

export default App
