import * as React  from 'react';
import { useGetList , Loading  } from 'react-admin';
import CardWithIcon from './CardWithIcon';
import { Card } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';

//test

    const WorkOrderTotalOp = () => {
        
        const {total, loading, error } = useGetList('PMWorks/WorkOrder', 
            { page: 1, perPage: 1 },
            { field: 'title', order: 'ASC' },
            { StatusID__OpCl: '1' },
        );
        if (loading) { return <Loading />; }
        if (error) { return <p>ERROR</p>; }
        return(<CardWithIcon 
            to="/PMWorks/WorkOrder/?StatusID__OpCl=1"
            icon={WorkIcon}
            title={"دستور کار باز"}
            subtitle={total}
            />); };

            const WorkOrderTotalOpPM = () => {
                
                const {total, loading} = useGetList('PMWorks/WorkOrder', 
                    { page: 1, perPage: 1 },
                    { field: 'title', order: 'ASC' },
                    { StatusID__OpCl: '1', WorkOrderType: '1' },
                );
                if (loading) { return <Loading />; }
                return(<CardWithIcon 
                    to="/PMWorks/WorkOrder/?StatusID__OpCl=1"
                    icon={WorkIcon}
                    title={"دستور کار بازPM"}
                    subtitle={total}
                    />); };
                    
            const WorkOrderTotalOpWR = () => {
                 const {total, loading } = useGetList('PMWorks/WorkOrder', 
                    { page: 1, perPage: 1 },
                    { field: 'title', order: 'ASC' },
                    { StatusID__OpCl: '1', WorkOrderType: '0' },
                );
                if (loading) { return <Loading />; }
                return(<CardWithIcon 
                    to="/PMWorks/WorkOrder/?StatusID__OpCl=1"
                    icon={WorkIcon}
                    title={"دستور کار بازWR"}
                    subtitle={total}
                    />); };        

            const WorkRequestTotalOp = () => {
                const {total, loading } = useGetList('PMWorks/WorkRequest', 
                    { page: 1, perPage: 1 },
                    { field: 'title', order: 'ASC' },
                    { StatusID__OpCl: '1' },
                );
                if (loading) { return <Loading />; }
                return(<CardWithIcon 
                    to="PMWorks/WorkRequest"
                    icon={WorkOutlineOutlinedIcon}
                    title={"درخواست کار باز"}
                    subtitle={total}
                    />); };        
                  /*  const DepartmentCreate = props => {

                        const refresh = useRefresh();
                    
                        const onClick = () => {
                            refresh();
                        };
                    return(<button onClick={onClick}>felean</button>
                    );
                    };
*/

const WorkOrderCount = (props) => {

    
    return (
        <Card className='classes.CardWithIcon'> 
        <WorkOrderTotalOp/>
            <WorkOrderTotalOpPM/>
            <WorkOrderTotalOpWR/>
        <WorkRequestTotalOp/>
        </Card>
        
    );
};

export default WorkOrderCount;