import React, { Component } from 'react';
import {Link} from 'react-router';
import './style.css';


export default class Menu extends Component {
	render() {
		return (
			<div className="sideBarWrapper">
				<aside className="main-sidebar">
			          <section className="sidebar">
			            <div className="user-panel">
			              <div className="pull-left image">
			                <img src="/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>
			              </div>
			              <div className="pull-left info">
			                <p>Alexander Pierce</p>
			                <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
			              </div>
			            </div>
			            <form action="#" method="get" className="sidebar-form">
			              <div className="input-group">
			                <input type="text" name="q" className="form-control" placeholder="Search..."/>
			                <span className="input-group-btn">
			                      <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
			                      </button>
			                    </span>
			              </div>
			            </form>
			            
			            <ul className="sidebar-menu" data-widget="tree">
			              <li className="header">MAIN NAVIGATION</li>
			              <li className="active treeview">
			                <Link to="/dashboard">
			                  <i className="fa fa-dashboard"></i> <span>Dashboard</span>
			                  <span className="pull-right-container">
			                    <i className="fa fa-angle-left pull-right"></i>
			                  </span>
			                </Link>
			              </li>
			              <li className="treeview">
			                <Link to="/layout">
			                  <i className="fa fa-files-o"></i>
			                  <span>Layout Options</span>
			                  <span className="pull-right-container">
			                    <span className="label label-primary pull-right">4</span>
			                  </span>
			                </Link>
			              </li>
			            </ul>
			          </section>
			        </aside>
			</div>
		)
	}
}