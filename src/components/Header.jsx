import React from "react";
import ImportContactsIcon from '@material-ui/icons/ImportContacts';

function Header() {
  return (
    <header>
      <h1>
        <ImportContactsIcon/> {" " + 
        "NoteBook"}
      </h1>
    </header>
  );
}

export default Header;
