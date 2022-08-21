import * as React from 'react';
import { FC, createElement } from 'react';
import { Card, Box, Typography, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

import cartouche from './cartouche.png';
import cartoucheDark from './cartoucheDark.png';


const CardWithIcon = (props) => {
    const { icon, title, subtitle, to, children } = props;

    return (
        // @ts-ignore
        <Card
            sx={{
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
            }}
        >
            <Link to={to}>
                <Box
                    sx={{
                        overflow: 'hidden',
                        float: 'right' ,
                        backgroundSize:'contain',
                        padding: '16px',
                        minWidth:'284px',
                        background: theme =>
                            `url(${
                                theme.palette.mode === 'dark'
                                    ? cartoucheDark
                                    : cartouche
                            }) no-repeat`,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        '& .icon': {
                            color: theme =>
                                theme.palette.mode === 'dark'
                                    ? 'inherit'
                                    : '#dc2440',
                        },
                    }}
                >
                    <Box width="3em" className="icon">
                        {createElement(icon, { fontSize: 'large' })}
                    </Box>
                    <Box textAlign="right">
                        <Typography color="textSecondary">{title}</Typography>
                        <Typography variant="h5" component="h2">
                            {subtitle || ' '}
                        </Typography>
                    </Box>
                </Box>
            </Link>
            {children && <Divider />}
            {children}
        </Card>
    );
};

export default CardWithIcon;