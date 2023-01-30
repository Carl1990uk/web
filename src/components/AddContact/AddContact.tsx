import { useState } from "react";

import { useMutation } from "react-query";
import axios from "axios";

type Props = {
  backBtnClickHandler: () => void;
};

const AddToDo = (props: Props) => {
  const { backBtnClickHandler } = props;
  const [state, setData] = useState({
    salutation: "",
    foreName: "",
    surname: "",
    telephone: "",
  });

  const { mutate } = useMutation(() => {
    return axios.post(`${process.env.REACT_APP_API_URL}`, {
      headers: {
        method: "POST",
        "content-type": "application/json",
      },
      state,
    });
  });

  return (
    <div>
      <div>
        <h2>Hello: {state.foreName}</h2>
      </div>
      <form
        onSubmit={() => {
          mutate();
        }}
      >
        <div>
          <label>Title: </label>
          <input
            type="text"
            value={state.salutation}
            onChange={({ target: { value } }) => {
              setData({ ...state, salutation: value });
            }}
          />
        </div>
        <div>
          <label>First Name: </label>
          <input
            type="text"
            value={state.foreName}
            onChange={({ target: { value } }) => {
              setData({ ...state, foreName: value });
            }}
          />
        </div>
        <div>
          <label>Last Name: </label>
          <input
            type="text"
            value={state.surname}
            onChange={({ target: { value } }) => {
              setData({ ...state, surname: value });
            }}
          />
        </div>
        <div>
          <label>Phone Number: </label>
          <input
            type="text"
            value={state.telephone}
            onChange={({ target: { value } }) => {
              setData({ ...state, telephone: value });
            }}
          />
        </div>
        <div>
          <input type="button" value="back" onClick={backBtnClickHandler} />
          <input type="submit" value="Add Contact" />
        </div>
      </form>
    </div>
  );
};

export default AddToDo;
