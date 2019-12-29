import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    error: {
        color: theme.palette.error.light
    },
    container: {
        backgroundColor: theme.palette.primary.main,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    textLabel: {
        '& label': {
            color: theme.palette.primary.contrastText,
        }, '& input': {
            color: theme.palette.primary.contrastText,
        },
        '& :-webkit-autofill': {
            transition: 'background-color 5000s ease-in-out 0s',
            '-webkit-text-fill-color': theme.palette.primary.contrastText
        }
    }
}))


const Login = () => {
    const classes = useStyles();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showError, setShowError] = useState(false);


    const loginAction = e => {
        e.preventDefault()
        if (!!username && password) {
            alert('Hello ' + username)
        } else {
            setShowError(true);
        }
    };

    return (
        <div style={{display: 'flex', flexDirection: 'row', height: '-webkit-fill-available'}}>
            <Container component="main" className={classes.container}>
                <div className={classes.paper}>
                    <CssBaseline/>
                    <LockOutlinedIcon color={'secondary'}/>
                    <Typography component="h1" variant="h5" color={'secondary'}>
                        Sing in
                    </Typography>
                    <form onSubmit={loginAction}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            label="Username"
                            required
                            fullWidth
                            autoFocus
                            onChange={e => setUsername(e.target.value)}
                            value={username}
                            error={showError && username === ""}
                            color={'secondary'}
                            classes={{root: classes.textLabel}}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            label="Password"
                            required
                            fullWidth
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            error={showError && password === ""}
                            color={'secondary'}
                            classes={{root: classes.textLabel}}
                        />
                        <Button
                            type={'submit'}
                            onClick={loginAction}
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                        >
                            Sing In
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default Login
