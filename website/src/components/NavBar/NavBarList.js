import { List } from "@mui/material";
import { useState } from "react";
import NavBarListItem from "./NavBarListItem";
function NavBarList() {
    const names = ["Home", "Portfolio", "About Me", "Other"]
    const [selected, setSelected] = useState("Home");
    return (
        <div className="NavBarList">
            <List>
                {
                    names.map((name) => {
                        return (
                            <NavBarListItem
                                key={name}
                                name={name}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        )
                    })
                }
            </List>
        </div>
    );
}

export default NavBarList;
