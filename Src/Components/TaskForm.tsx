import { useState } from "react"
import { Button, Input } from "@fluentui/react-components"

interface Props {
  onAdd: (title: string) => void
}

export default function TaskForm({ onAdd }: Props) {
  const [title, setTitle] = useState("")

  const submit = () => {
    if (!title.trim()) return
    onAdd(title)
    setTitle("")
  }

  return (
    <div style={{ display: "flex", gap: 10 }}>
      <Input
        placeholder="Enter task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button appearance="primary" onClick={submit}>
        Add
      </Button>
    </div>
  )
}
