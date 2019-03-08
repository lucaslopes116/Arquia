import React from 'react';
import Container from '../components/container/Container';
import Menu from '../components/menuBotton/Menu';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const style = (theme) => ({
    main:{       
        margin: '10px 10px 10px 10px',
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid black',
        borderRadius: '10px',
        height: '85vh',
    },
})

class Home extends React.Component {
    render() {

        const { classes } = this.props;

        return (
            <React.Fragment>
                <div className={classes.main}>
                    <Container/>               
                </div>
                <div>
                    <Menu/>
                </div>
            </React.Fragment>
        );
    }
}

Home.propTypes = {
    classes : PropTypes.object.isRequired,
};

export default withStyles(style)(Home);