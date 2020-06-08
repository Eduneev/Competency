import * as React from 'react';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslate, Title } from 'react-admin'; 

import ProgramIcon from '@material-ui/icons/Book';
import ProgramList from './ProgramList';

const useStyles = makeStyles({
    root: {
        marginTop: 16,
    },
});


export default{
    icon: ProgramIcon,
    list: ProgramList, 
};
