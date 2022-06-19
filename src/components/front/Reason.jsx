import classes from "./Reason.module.css";
import security from "../../assets/security.png"
const Reason = (props) => {
  return (
    <div className={classes.reason}>
      <div className={classes.reasonImage}>
        <svg viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <clipPath id="shape">
              <path
                fill="currentColor"
                d="M859.5,623Q838,746,700.5,720Q563,694,492.5,717.5Q422,741,376.5,682Q331,623,262,561.5Q193,500,180.5,379.5Q168,259,284,225.5Q400,192,517.5,137.5Q635,83,665,220.5Q695,358,788,429Q881,500,859.5,623Z"
              ></path>
            </clipPath>
          </defs>

          <g clip-path="url(#shape)">
            <path
              fill="#e8e7ea"
              d="M859.5,623Q838,746,700.5,720Q563,694,492.5,717.5Q422,741,376.5,682Q331,623,262,561.5Q193,500,180.5,379.5Q168,259,284,225.5Q400,192,517.5,137.5Q635,83,665,220.5Q695,358,788,429Q881,500,859.5,623Z"
            />
          </g>
        </svg>
        <img src={security} alt="security" />
      </div>
      <div className={classes.reasonInfo}>
        <h2>{props.name}</h2>
        <p>
        {props.description}
        </p>
      </div>
    </div>
  );
};

export default Reason;