import useMediaQuery from '@mui/material/useMediaQuery';

export default function DrawerBasic() {
    const [open, setOpen] = React.useState(false);
    const isMobile = useMediaQuery('(max-width:1024px)');

    const toggleDrawer = (newOpen: boolean) => (event: React.SyntheticEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setOpen(newOpen);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            {isMobile && (
                <Button variant="outlined" color="neutral" onClick={toggleDrawer(true)}>
                    Open drawer
                </Button>
            )}
            <Drawer open={open} onClose={toggleDrawer(false)}>
                <Box
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
                            <ListItem key={text}>
                                <ListItemButton>{text}</ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text) => (
                            <ListItem key={text}>
                                <ListItemButton>{text}</ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
}
