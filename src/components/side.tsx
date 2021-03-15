import React, {useState, useEffect} from 'react';
import Link from 'next/router';
import {FiLogOut, FiUsers, FiArchive} from 'react-icons/fi';
import {color} from '../theme'
import { Button, Translator } from './'

import { 
        Container, 
        Bar,
      } from '../styles/components/side';
import { useSSR } from 'react-i18next';

  interface Props {
    userData?: any,
}

export function Side(props: Props) {
  const [i18n, setI18n] = useState(false);

  // function logout() {
  //   localStorage.removeItem('user')
  //   history.push('/');
  // }

  return (
  <Container>
    <Button backColor={color.green} name='addUser' />
  </Container>
  )
}


//<div style={{display: 'flex', flexDirection: 'row', height: 'auto', width: 'auto', alignItems: 'center'}} id='profile'>
      {/* <img style={{height: 100, width: 100, borderRadius: 20, marginRight: 15}} src={`data: image/jpeg; base64, ${user.image}`} alt="foto"/> */}
  //    <div style={{display: 'flex', flexDirection: 'column', height: 100, justifyContent: 'center'}} id='profile'>
    //    <h1 style={{color: '#fff', fontSize: 15, width: '100%', textAlign: 'left'}} > Alexandre </h1>
      //  <p style={{color: '#fff', fontSize: 13, width: '100%', textAlign: 'left', fontWeight: 'bold'}}> Hello </p>
  //      <Link to='/edit' className="button" id='forgot'>
    //      <Translator path='edit' />
      //  </Link>
    //  </div>
//    </div>
//    <Bar />
//    <Button name='emergência' to='emergency'/>
//    <Button name='manutenção' to='maintenance'/>
//    <Button name='estoque' onClick={()=>{alert('teste')}}/>
//    <Button name='pista' onClick={()=>{alert('teste')}}/>
//    <Button name='aeroportos' onClick={()=>{alert('teste')}}/>
//    <Button name='tasks' onClick={()=>{alert('teste')}}/>
//    <Button name='ocorrências' to='/home'/>
//    <Button name='addUser' to='/register'/>
//    <Button name='editUser' onClick={()=>{alert('teste')}}/>
//    <Button i18n={i18n} name='translator' onClick={i18n === true ? ()=>{setI18n(false)} : ()=>{setI18n(true)}}/>
//    {/* <Button name='logout' onClick={logout}/> */}