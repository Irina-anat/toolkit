import React from 'react';
import { Account } from './Account';
import { LangSwitcher } from './LangSwitcher';
import { useSelector } from 'react-redux';



export const App = () => {
  const lang = useSelector(state=>state.locale.lang)
  return (
    <div>
      <div>Current lang: {lang}</div>
      <hr/>
      <LangSwitcher />
      <hr/>
      <Account/>
   </div>
  );
};
