import styles from "./layout.module.css";
import YouTube from "react-youtube";
import utilStyles from "../styles/utils.module.css";

import Emoji from "react-emoji-render";

export default function Video({
  videoId,
  stamps,
}: {
  videoId: string;
  stamps: Array<{ timestamp; content }>;
}) {
  let _eventTarget;
  const _onReady = (e) => {
    // access to player in all event handlers via event.target
    _eventTarget = e.target;
  };
  const _getTimeValue = (url: string): number => {
    return parseInt(url.split("#")[1]);
  };
  const _getSeconds = (timestamp: string) => {
    const minutes: number = parseInt(timestamp.split(":")[0]);
    const seconds: number = parseInt(timestamp.split(":")[1]);
    return minutes * 60 + seconds;
  };
  const _seekTo = (e) => {
    const time: number = _getTimeValue(e.target.href);
    _eventTarget.seekTo(time);
  };
  const opts: { height; width; playerVars } = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const listHtml: Array<JSX.Element> = stamps.map((stamp) => {
    const seconds: number = _getSeconds(stamp.timestamp);
    return (
      <li>
        <Emoji text=":pushpin:" />{" "}
        <a href={`#${seconds}`} onClick={_seekTo}>
          {stamp.timestamp}
        </a>{" "}
        <Emoji text={`${stamp.content}`} />
      </li>
    );
  });
  return (
    <div className={styles.flexContainer}>
      <div>
        <YouTube videoId={videoId} opts={opts} onReady={_onReady} />
      </div>
      <div className={utilStyles.timestampBox}>
        <ul>
          <li>
            <Emoji text=":scroll: :point_down:" />
          </li>
          {listHtml}
          <li>
            <Emoji text=":scroll: :end:" />
          </li>
        </ul>
      </div>
    </div>
  );
}
