import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    minHeight: '95vh',
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function CenterCard() {
    return (
        <div className="CenterCard">
            <Box sx={{ flexGrow: 1 }}>
                <Item>
                    <Card variant="outlined">abc</Card>
                </Item>
            </Box>
        </div>
    );
}

export default CenterCard;
