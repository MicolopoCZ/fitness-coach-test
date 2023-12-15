import bell from '../../assets/Bell.svg'
import bowl from '../../assets/Bowl.svg'
import calendar from '../../assets/Calendar.svg'
import friends from '../../assets/Friends.svg'
import notes from '../../assets/Note.svg'
import run from '../../assets/Run.svg'
import stats from '../../assets/Stats.svg'
import weight from '../../assets/Weight.svg'
import settings from '../../assets/Settings.svg'
import logout from '../../assets/Logout.svg'
import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {useEffect, useState} from 'react'

export const ListItems = (props: any): JSX.Element => {
  return(
    <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
      <img src={notes} style={props.open ? {marginLeft: '2.75rem'} : {marginLeft: '.5rem'}} alt="" className='icon' />
      </ListItemIcon>
      <ListItemText primary="Notes" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <img src={calendar} style={props.open ? {marginLeft: '2.75rem'} : {marginLeft: '.5rem'}} alt="" className='icon' />
      </ListItemIcon>
      <ListItemText primary="Timetable" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <img src={run} style={props.open ? {marginLeft: '2.75rem'} : {marginLeft: '.5rem'}} alt="" className='icon' />
      </ListItemIcon>
      <ListItemText primary="Exercises" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <img src={bowl} style={props.open ? {marginLeft: '2.75rem'} : {marginLeft: '.5rem'}} alt="" className='icon' />
      </ListItemIcon>
      <ListItemText primary="Dishes" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <img src={weight} style={props.open ? {marginLeft: '2.75rem'} : {marginLeft: '.5rem'}} alt="" className='icon' />
      </ListItemIcon>
      <ListItemText primary="Programs" />
    </ListItemButton>
  </React.Fragment>
  )
}


export const SecondaryListItems = (props: any):JSX.Element => {
  return (
    <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
      <img src={stats} style={props.open ? {marginLeft: '2.75rem'} : {marginLeft: '.5rem'}} alt="" className='icon' />
      </ListItemIcon>
      <ListItemText primary="Stats" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <img src={friends} style={props.open ? {marginLeft: '2.75rem'} : {marginLeft: '.5rem'}} alt="" className='icon' />
      </ListItemIcon>
      <ListItemText primary="Friends" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <img src={bell} style={props.open ? {marginLeft: '2.75rem'} : {marginLeft: '.5rem'}} alt="" className='icon' />
      </ListItemIcon>
      <ListItemText primary="Notificatons" />
    </ListItemButton>
  </React.Fragment>
  )
}

export const BottomListItems = (props: any):JSX.Element => {
  return (
<div className="bottomListItems">
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
      <img src={stats} style={props.open ? {marginLeft: '2.75rem'} : {marginLeft: '.5rem'}} alt="" className='icon' />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
      <img src={logout} style={props.open ? {marginLeft: '2.75rem'} : {marginLeft: '.5rem'}} alt="" className='icon' />
      </ListItemIcon>
      <ListItemText className='logoutText' primary="Log out" />
    </ListItemButton>
  </React.Fragment>
  </div>
  )
}

