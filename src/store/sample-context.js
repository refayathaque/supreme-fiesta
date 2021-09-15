import { createContext, useState } from "react";

const SampleContext = createContext({
  nameOfPerson: "", // this is the default value, which is just an empty string
  changeNameOfPerson: () => {}, // this is the default function, which is just a dummy function
});

export const SampleContextProvider = (props) => {
  // named export for this provider component
  const [nameOfPerson, setNameOfPerson] = useState("Refayat");

  const changeNameOfPersonHandler = (newName) => {
    // this method is passed to all components that are consumers of the SampleContext.Provider below, it allows consumers to send data up to the SampleContext, and in this case, change the `nameOfPerson` property - Once the `nameOfPerson` is changed, all components "consuming" this context will be updated
    console.log(newName);
    setNameOfPerson(newName);
  };

  return (
    <SampleContext.Provider
      value={{
        nameOfPerson,
        changeNameOfPerson: changeNameOfPersonHandler,
      }}
    >
      {props.children}
    </SampleContext.Provider>
  );
};

export default SampleContext;
