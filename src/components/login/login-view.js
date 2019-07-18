import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab'
import useStyles from './login-styles'

const Login = ({ username, password, handleClick, handleChange }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <TextField
                        id="username" 
                        label="Email" 
                        className={classes.textField} 
                        type="text" 
                        value={username} 
                        onChange={handleChange('username')}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="password"
                        label="Contraseña"
                        className={classes.textField}
                        type="password"
                        value={password}
                        onChange={handleChange('password')}
                        margin="normal"
                        variant="outlined"
                    />
                </CardContent>
                <CardActions className={classes.content}>
                    <Fab
                        variant="extended"
                        size="medium"
                        color="secondary"
                        onClick={() => handleClick()}
                    >
                        Iniciar sesión
                    </Fab>
                </CardActions>
            </Card>
        </div>
    )
}

Login.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default Login