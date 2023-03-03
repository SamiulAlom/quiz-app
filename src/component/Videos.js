import { Link } from "react-router-dom";
import useVedio from "../hooks/useVedio";
import classes from "../style/Videos.module.css";
import Video from "./Video";
export default function Videos() {
  const { loading, error, videos } = useVedio();
  return (
    <div className={classes.videos}>
      {videos.length > 0 &&
        videos.map((vedio) => (
          <Link to={`/quiz/${vedio.youtubeID}`} key={vedio.youtubeID}>
            <Video
              title={vedio.title}
              id={vedio.youtubeID}
              noq={vedio.noq}
              image={vedio.image}
              key={vedio.youtubeID}
            />
          </Link>
        ))}
      {!loading && videos.length === 0 && <div>No data found!</div>}
      {error && <div>There was an error</div>}
      {loading && <div>Loading..... </div>}
    </div>
  );
}
