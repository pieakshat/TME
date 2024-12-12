import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function Home() {
  return (
    <>
      <TaskForm groupId="1" />
      <TaskList groupId="1" />
    </>
  );
}
