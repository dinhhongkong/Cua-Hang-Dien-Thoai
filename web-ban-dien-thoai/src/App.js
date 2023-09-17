import './index.css';
import {ReactComponent as BellIcon} from './icons/bell.svg';
import {ReactComponent as MessengerIcon} from './icons/messenger.svg';
import {ReactComponent as CaretIcon} from './icons/caret.svg';
import {ReactComponent as PlusIcon} from './icons/plus.svg';
import {ReactComponent as AppleIcon} from './icons/apple.svg';
import {ReactComponent as CogIcon} from './icons/cog.svg';
import {ReactComponent as ChevronIcon} from './icons/chevron.svg';
import {ReactComponent as ArrowIcon} from './icons/arrow.svg';
import {ReactComponent as BoltIcon} from './icons/bolt.svg';
import React from 'react';
import {Navbar} from "./component/Navbar/Navbar";
import {NavItem} from "./component/Navbar/NavItem";
import {DropdownMenu} from "./component/Navbar/DropDownMenu";
import SearchBar from "./component/SearchBar/SearchBar";

function App() {
  return (
      <Navbar>
        <div className="logo-left">
          <NavItem icon={<AppleIcon/>}/>
        </div>
          <SearchBar></SearchBar>
        <NavItem link={'duong-den-vinh-quang'} icon={<PlusIcon/>}/>
        <NavItem icon={<BellIcon/>}/>
        <NavItem icon={<MessengerIcon/>}/>
        <NavItem icon={<CaretIcon/>}>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Navbar>
  );
}


export default App;
