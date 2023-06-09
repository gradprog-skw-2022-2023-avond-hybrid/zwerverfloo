import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_600,h_400/https://www.yetiboards.be/wp-content/uploads/2022/01/k-lein-onderhoudSki-YETIBOARDS-220107103556.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '2em',
    },
    logoText: {
        fontWeight: 'bold'
    },
    error: {
        color: 'red'
    }
}));

export default useStyles;
