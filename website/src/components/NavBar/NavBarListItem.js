import { ListItem, ListItemButton, ListItemText } from "@mui/material";
function NavBarListItem({ name, selected, setSelected }) {
    const isSelected = selected == name ? true : false
    function click(){
        setSelected(name)
        //redirect to url
    }
    return (
        <ListItem disablePadding divider>
            <ListItemButton selected={isSelected} onClick={click}>
                <ListItemText primary={name} />
            </ListItemButton>
        </ListItem>
    );
}

export default NavBarListItem;
