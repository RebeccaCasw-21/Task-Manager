import { Checkbox, Button } from "@fluentui/react-components"
import { Task } from "../models/Task"

interface Props {
  task: Task
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export default function TaskItem({ task, onToggle, onDelete }: Props) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: 8 }}>
      <Checkbox
        checked={task.completed}
        label={task.title}
        onChange={() => onToggle(task.id)}
      />

      <Button appearance="subtle" onClick={() => onDelete(task.id)}>
        Delete
      </Button>
    </div>
  )
}
