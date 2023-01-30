import React from "react";
import Contacts from "../../pages/Home";

import "./contactlist.module.scss";
type Props = {
  list: Contacts[];
};

//will show the records in the table for all todolists
const ContactList = (props: Props) => {
  //disruction of props

  const { list } = props;
  return (
    <div className="container-table">
      <article>
        <h3 className="list-header"></h3>
      </article>
      <table>
        <tr>
          <th>Title</th>
          <th>Full Name</th>
          <th>Telephone</th>
          <th>Actions</th>
        </tr>
        {list.map((item) => {
          return (
            <tr key={item.telephone}>
              <td>{item.salutation}</td>
              <td>
                {item.foreName} {""}
                {item.surname}
              </td>
              <td>{item.telephone}</td>
              <td>
                <div>
                  <input type="button" value="View" />
                  <input type="button" value="Edit" />
                  <input type="button" value="Delete" />
                </div>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default ContactList;
