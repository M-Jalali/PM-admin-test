import React from 'react';
import { useGetList , Loading , TextField } from 'react-admin';
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

const RequsetListSimple = props => {
        
    const { data, total,loading, error } = useGetList('PMWorks/WorkRequest', 
        { page: 1, perPage: 4 },
        { field: 'id', order: 'ASC' },
        {},
    );
    
    if (loading) { return <Loading />; }
    if (error) { return <p>ERROR</p>; }
    

const Detroit = []; 
for(var i in data)
    Detroit.push(i, data[i]);



    const useStyles = makeStyles(theme => ({
        SimpleList: {
            minHeight: 52,
            display: 'flex',
            overflow: 'hidden',
            float: 'right' ,
            flexDirection: 'column',
            flex: '1',
            '& a': {
                textDecoration: 'none',
                color: 'inherit',
            },
        
        },
        main: (props) => ({
            overflow: 'hidden',
            float: 'right' ,
            backgroundSize:'contain',
            padding: '16px',
            minWidth:'270px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }),
        root: {
            flex: 1,
        },
        cost: {
            marginRight: '1em',
            color: theme.palette.text.primary,
        },

        title: {},
    }));
  /*   
console.log(data);
    //const classes = useStyles(props);
    return(<p></p>);
     */
    return( 
        <Card  style={{ flex: 1, float: "right" ,direction:'rtl', width:'45%'}}>
        <CardHeader title={'آخرین درخواست کارها'} />
        <List dense={true}>
            {Detroit.map(record => (
                <ListItem 
                    key={record.id}
                    button
                    component={Link}
                    to={`/PMWorks/WorkRequest/${record.id}/show`}
                >
                    <ListItemText 
                        primary={record.id}
                        secondary={record.WRDateOfRegistration}
                    />
                    <ListItemSecondaryAction>
                        <span style={{ marginRight: '1em',}}>
                            {record.total}
                        </span>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    </Card>
    );
 };
 
export default RequsetListSimple ;