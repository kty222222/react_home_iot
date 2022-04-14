import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import { Router } from 'react-router-dom';

function NavBar() {
    return (
        <List component="nav">
            <ListItem component="div" >
            <ListItemText inset>
                    <TypoGraphy href="/" color="inherit" riant="title">
                       소개 안내 
                    </TypoGraphy>
                </ListItemText>
                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        iot 제어
                    </TypoGraphy>
                </ListItemText>


                <ListItemText inset>
                    <TypoGraphy color="inherit" variant="title">
                        iot 상태 
                    </TypoGraphy>
                </ListItemText>
            </ListItem >

        </List>
    );
}
  
export default NavBar;