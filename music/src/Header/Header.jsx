import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
          <span className="logo">Yourbeats </span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
            </div>
    </div>
  );
}
