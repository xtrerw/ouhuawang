import React from 'react'
import "./header.css";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      
      <nav>
        <ul className='menu'>
          <li><Link to={"/"} className=''>BSC</Link></li>
          <li className='provincia'>
            <Link>地区</Link>
            <ul className='dropdown'>
              <li><Link to={"/madrid"}>马德里</Link></li>
              <li><Link to={"/bcn"}>巴塞罗纳</Link></li>
              <li><Link to={"/valencia"}>瓦伦西亚</Link></li>
              <li><Link to={"/malaga"}>马拉加</Link></li>
              <li><Link to={"/isla"}>海岛</Link></li>
              <li><Link to={"/otro"}>其他</Link></li>
            </ul>
          </li>
        </ul>
        <ul className='menu menu2'>
          <li><Link to={"/empresa-popular"}>热门公司</Link></li>
          <li><Link to={"/empresa-nueva"}>新创公司</Link></li>
          <li><Link to={"/tienda-intercambio"}>店铺转让</Link></li>
          <li><Link to={"/puesto-uni"}>校招</Link></li>
          <li><Link to={"/actividad"}>活动</Link></li>
          <li><Link to={"/noticias"}>资讯</Link></li>
        </ul>
        <ul className='menu'>
          <li><Link to={"/hiring"}>我要招聘</Link></li>
          <li><Link to={"/findjob"}>我要找工作</Link></li>
          <li><Link to={"/registro"}>登录/注册</Link></li>
        </ul>
      </nav>
  )
}

export default Header