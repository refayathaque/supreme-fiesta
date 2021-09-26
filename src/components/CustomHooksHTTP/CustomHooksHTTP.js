import { useCallback, useEffect, useState } from "react";
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

  // configuring and calling custom hook
  const subdirectory = "tasks.json";
  // https://blog.hubspot.com/marketing/parts-url
  const transformTasks = useCallback((tasksObject) => {
    const loadedTasks = [];
    for (const taskKey in tasksObject) {
      loadedTasks.push({ id: taskKey, text: tasksObject[taskKey].text });
    }
    setTasks(loadedTasks);
  }, []);
  // dependency array in this instance of `useCallback` can be left empty because `transformTasks` isn't using anything external, e.g., `setTasks` is a state updating function that's part of THIS component
  const {
    sendRequest: fetchTasks, // using alias with ES6 obj destructuring to make it more relevant for what we're doing in this component
    isLoading,
    error,
  } = useHttp();

  useEffect(() => {
    fetchTasks({ url: `${apis.baseUrl}${subdirectory}` }, transformTasks);
  }, [fetchTasks]);
  // `useCallback` method wrapping the `sendRequest` method (`fetchTask` is an alias for that) in the custom hook, don't forget that `useCallback` also has dependencies, but in this case the `useCallback` method in the custom hook has no dependendencies as the `requestConfig` object and `applyData` method are being passed in as args, they're not really "external" dependencies since they're just args

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
