import { useEffect, useState } from "react";
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import apis from "../../apis";
import useHttp from "./hooks/use-http";

const divStyle = {
  color: "red",
  border: "1px solid purple",
  margin: 10,
};

const CustomHooksHTTP = () => {
  const [tasks, setTasks] = useState([]);

  const subdirectory = "tasks.json";
  // https://blog.hubspot.com/marketing/parts-url

  // calling custom hook and destructuring out what it returns
  const {
    sendRequest: fetchTasks, // using alias with ES6 obj destructuring to make it more relevant for what we're doing in this component
    isLoading,
    error,
  } = useHttp();

  useEffect(() => {
    const transformTasks = (tasksObject) => {
      const loadedTasks = [];
      for (const taskKey in tasksObject) {
        loadedTasks.push({ id: taskKey, text: tasksObject[taskKey].text });
      }
      setTasks(loadedTasks);
    };

    fetchTasks({ url: `${apis.baseUrl}${subdirectory}` }, transformTasks);
  }, [fetchTasks]);
  // `useCallback` method wrapping the `sendRequest` method (`fetchTask` is an alias for that) in the custom hook, don't forget that `useCallback` also has a dependencies array as the 2nd arg, but in this case the `useCallback` method in the custom hook has no dependendencies as the `requestConfig` object and `applyData` method are being passed in as args.
  // They're not really "external" dependencies since they're just args. But had we passed in `requestConfig` and `applyData` through its parent method, the `useHttp` custom hook, then they WOULD be added to the `useCallback` dependency array because in that situation they ARE external dependencies.

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <div style={divStyle}>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </div>
  );
};

export default CustomHooksHTTP;
