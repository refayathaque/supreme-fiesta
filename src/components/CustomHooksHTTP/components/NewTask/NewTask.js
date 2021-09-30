import apis from "../../../../apis";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
  // calling custom hook and destructuring out what it returns
  const {
    sendRequest: sendTaskRequest, // using alias with ES6 obj destructuring to make it more relevant for what we're doing in this component
    isLoading,
    error,
  } = useHttp();

  const subdirectory = "tasks.json";
  // https://blog.hubspot.com/marketing/parts-url

  const createTask = (taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    sendTaskRequest(
      {
        url: `${apis.baseUrl}${subdirectory}`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { text: taskText },
      },
      createTask.bind(null, taskText)
      // having to use `bind` here because in the customHook, `applyData`, which is the pointer to the `createTask` method here, only passes in a single arg - `applyData(data)` - but if you look up at `createText` it takes in two args, with `taskData` being the `data` in `applyData(data)` in the custom hook - we get around this problem by passing in `taskText` from here when passing in the `createTask` method as the second arg to `sendTaskRequest`
      // What does the bind() method do though? It "prepares" the function on which it's called for future execution.
      // It allows you to "preconfigure" which arguments that function should receive when it's eventually getting called.
      // In addition, you can also define what the this keyword should refer to inside of that function, we "tell" JavaScript that this should be null (or, to be precise, not have any different value that it would have otherwise)
      //You can simply keep in mind that the first parameter of bind is always the this keyword reference, all other parameters thereafter are the arguments fed into the function that will be invoked (i.e. on which you called bind).
      // So the first parameter of the "to-be-called" function will then get the second argument passed to bind. The second parameter of the "to-be-called" function will be defined via the third argument passed to bind. And so on.
      // https://academind.com/tutorials/function-bind-event-execution
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
