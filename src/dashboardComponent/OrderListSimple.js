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
import { RadarChart } from 'recharts';

const WorkOrderSimpleList = props => {
        
    const { data, total,loading, error } = useGetList('PMWorks/WorkOrder', 
        { page: 1, perPage: 4 },
        { field: 'title', order: 'ASC' },
        {},
    );
    
    if (loading) { return <Loading />; }
    if (error) { return <p>ERROR</p>; }
    

const Detroit = []; 
for(var i in data)
    Detroit.push(i, data[i]);

    const getStatus = (record) => {
        if (record.StatusID === '0') {
          return "WR";
        }
        if (record.StatusID === '1') {
          return "PM";
        }
      };

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
 
    return( 
        <Card  style={{ flex: 1, float: "right" ,direction:'rtl', width:'45%'}}>
        <CardHeader title={'آخرین دستور کارها'} />
        <List dense={true} >
            {Detroit.map(record => (
                <ListItem 
                    key={record.id}
                    button
                    component={Link}
                    to={`/PMWorks/WorkOrder/${record.id}/show`}
                >
                    <ListItemText 
                        primary={record.id}
                        secondary={record.DateOfPlanFinish}
                    />
                </ListItem>
            ))}
        </List>
    </Card>
    );
 };
 
export default WorkOrderSimpleList ;