import React from 'react';
import { useGetList , Loading , TextField,ResourceContextProvider, SimpleList } from 'react-admin';
import ListSimple from './ListSimple';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useTranslate } from 'react-admin';
import { RecordContext } from 'ra-core';

const ListTestDash = (props) => {
        
 
    return( 
        <Card  style={{ flex: 1, float: "right" ,direction:'rtl', width:'45%'}}>
        <CardHeader title={'آخرین دستور کارها'} />
            <ResourceContextProvider value="PMWorks/WorkOrder">
            <List {...props} perPage={4} syncWithLocation basePath="PMWorks/WorkOrder" 
             >
                <SimpleList
                 primaryText={record => record.id}
                />
            </List> 
            </ResourceContextProvider>
    </Card>
    );
 };
 
export default ListTestDash ;