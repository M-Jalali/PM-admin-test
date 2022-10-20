import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const ListSimple = (props) => {  
    const {data = []  , title, subtitle, to, children } = props;

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
    
        const classes = useStyles(props);
        return (
            <Card className={classes.root} style={{ float: "right"}}>
            <CardHeader title={'hello'} />
            <List dense={true}>
                {data.map(record => (
                    <ListItem
                        key={record.id}
                        button
                        component={Link}
                        to={to`${record.id}`}
                    >
                        <ListItemText
                            primary={record.id}
                            secondary={{
                                customer_name: data[record.id]
                                    ? `${
                                          data[record.id]
                                              .WODescription
                                      } ${
                                          data[record.id]
                                              .WODescription
                                      }`
                                    : '',
                            }}
                        />
                        <ListItemSecondaryAction>
                            <span className={classes.cost}>
                                {record.total}$
                            </span>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
        </Card>);
    };

export default ListSimple;