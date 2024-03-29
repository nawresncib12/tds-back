import classes from "./Badget.module.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
const Badget = (props) => {
   const {name,number,increase,percentage,color}=props;
  return (
    <div className={classes.badget + " " + classes["badget"+color]}>
      <h6>{name}</h6>
      <h2>{number}</h2>
      <div className={classes.icon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 296.577 296.577"
        >
          <g>
            <path
              d="M287.183,243.393l-27.577-27.577c-5.857-5.857-15.355-5.857-21.213,0c-5.858,5.857-5.858,15.355,0,21.213l1.971,1.971
		H62.577V51.212l1.971,1.971c5.858,5.859,15.355,5.858,21.213,0c5.858-5.857,5.858-15.355,0-21.213L58.183,4.393
		c-5.857-5.857-15.355-5.857-21.213,0L9.393,31.97c-5.858,5.857-5.858,15.355,0,21.213c5.857,5.858,15.355,5.858,21.213,0
		l1.971-1.971V254c0,8.284,6.716,15,15,15h192.787l-1.971,1.971c-5.858,5.857-5.858,15.355,0,21.213
		c5.858,5.859,15.355,5.858,21.213,0l27.577-27.577C293.042,258.749,293.042,249.25,287.183,243.393z"
            />
            <path
              d="M103.089,183.288c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h98c8.284,0,15-6.716,15-15c0-8.284-6.716-15-15-15
		H103.089z"
            />
            <path
              d="M103.089,88.288h76c8.284,0,15-6.716,15-15c0-8.284-6.716-15-15-15h-76c-8.284,0-15,6.716-15,15
		C88.089,81.572,94.804,88.288,103.089,88.288z"
            />
            <path
              d="M88.089,135.788c0,8.284,6.716,15,15,15h165c8.284,0,15-6.716,15-15c0-8.284-6.716-15-15-15h-165
		C94.804,120.788,88.089,127.503,88.089,135.788z"
            />
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      </div>
      {increase && <p>
        <span className={classes.increase}>
          <ArrowUpwardIcon viewBox="0 0 24 15"></ArrowUpwardIcon>{percentage}%
        </span>
        increase this month
      </p>}
      
      {!increase &&<p>
        <span className={classes.decrease}>
          <ArrowDownwardIcon viewBox="0 0 24 15"></ArrowDownwardIcon>{percentage}% 
        </span>
         increase this month
      </p>}
    </div>
  );
};

export default Badget;
