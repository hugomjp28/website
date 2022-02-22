import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import { Title } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    minHeight: '97vh',
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function CenterCard() {
    return (
        <div className="CenterCard">
            <Box sx={{ flexGrow: 1}}>
                <Item>
                        <header>Home</header>

                </Item>
            </Box>
        </div>
    );
}

export default CenterCard;
