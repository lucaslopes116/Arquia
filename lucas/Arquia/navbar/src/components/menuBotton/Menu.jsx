import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { MoreHoriz } from '@material-ui/icons'

const styles =(theme) => ({
    navi:{
      justifyContent: 'space-around',
      display: 'flex',    
      border: '1px solid black',
      borderRadius: '10px',
      margin: '10px 10px 0 10px',
    }
  });
  
  class  Menu extends React.Component {
    state = {
      value: 'recents',
    };
  
    handleChange = (event, value) => {
      this.setState({ value });
    };

    icones = [
        {
            value: "teste",
            label: 'Tá na hora',
            component: <RestoreIcon />
          },
          {
            value: "favicon",
            label: 'Favorito',
            component: <FavoriteIcon />
          },
          {
            value: "location",
            label: 'Ta perto',
            component: <LocationOnIcon />
          },
          {
            value: "more",
            label: 'Ver mais',
            component: <MoreHoriz />
          } 
      ]
    
  
    render() {
      const { classes } = this.props;
      const { value } = this.state;
  
      return <BottomNavigation value={value} onChange={this.handleChange} className={classes.navi}>
        {this.icones.map((icone, index) =>
                <BottomNavigationAction key={index} label={icone.label} value={icone.value} icon={icone.component} />)}
              </BottomNavigation>
      
    }
  }
  
  Menu.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Menu);