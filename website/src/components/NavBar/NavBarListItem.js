import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { FormattedMessage } from "react-intl";
function NavBarListItem({ name, selected, setSelected }) {
    const isSelected = selected === name ? true : false
    function click(){
        setSelected(name)
        //redirect to url
    }
    return (
        <ListItem disablePadding divider>
            <ListItemButton selected={isSelected} onClick={click}>
                <ListItemText>
                    <FormattedMessage id={name}/>
                </ListItemText>
            </ListItemButton>
        </ListItem>
    );
}

export default NavBarListItem;
