import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const styles = (theme) => ({
    tittle:{
        margin: '30px',
        fontWeight: 'bolder',  
    },
  });

class Container extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <h1 className={classes.tittle}>Teste do teste</h1>
            </div>
        );
    }
}

Container.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Container);