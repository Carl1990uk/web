import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import AddToDo from "../components/AddToDo/AddToDo";
import ContactList from "../components/ContactList/CommentList";

export enum PageEnum {
  list,
  add,
  edit,
}
export default interface Contacts {
  salutation: string;
  foreName: string;
  telephone: string;
  surname: string;
}

export const Home = () => {
  const [shownPage, setShownPage] = useState(PageEnum.list);

  const AddToDoHandler = () => {
    setShownPage(PageEnum.add);
  };
  const showListPage = () => {
    setShownPage(PageEnum.list);
  };

  const { isLoading, isError, data } = useQuery(["repoData"], () =>
    axios.get(`${process.env.REACT_APP_API_URL}`).then((res) => res.data)
  );
  if (isError) {
    return (
      <h1>Sorry Something weird has happened, check the server is running?</h1>
    );
  }
  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div>
      <h1>Simple CRUD operations</h1>

      <section>
        <div>content part</div>
        {shownPage === PageEnum.list && (
          <>
            <input type="button" value="add toDO" onClick={AddToDoHandler} />
            <ContactList list={data} />
          </>
        )}
        {shownPage === PageEnum.add && (
          <AddToDo backBtnClickHandler={showListPage} />
        )}
      </section>
    </div>
  );
};
