import "./Top.css";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
export default function Top() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">YourBeats</span>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Resume Reviewer</span>
          <span className="topbarLink">Referrals</span>
          <span className="topbarLink">Careers Advice</span>
          <span className="topbarLink">Job Openings
          </span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <AccountCircleSharpIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
