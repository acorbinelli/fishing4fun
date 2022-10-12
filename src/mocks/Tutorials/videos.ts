import { Tutorial, VideoItem, VideoSource, VideoType } from "types/videoItemTypes";

export const videos: VideoItem[] = [
  {
    videoSource: VideoSource.YOUTUBE,
    url: "https://www.youtube.com/watch?v=qzDhUH3STA4&list=PLTwQ_8_x1dDKbIBqcIrrscJPInzKjVhb7&index=1&ab_channel=Fishing4Fun",
    videoType: VideoType.TUTORIAL,
    tutorialType:Tutorial.MONTURA,
    title: "MONTURA SOMN CU PLUMB FIX",
  },
  {
    videoSource: VideoSource.YOUTUBE,
    url: "https://www.youtube.com/watch?v=iaCh2lF4eoI&list=PLTwQ_8_x1dDKbIBqcIrrscJPInzKjVhb7&index=3&t=28s&ab_channel=Fishing4Fun",
    videoType: VideoType.TUTORIAL,
    tutorialType:Tutorial.MONTURA,
    title: "MONTURA SOMN CU PLUMB CULISABIL",
  },
  {
    videoSource: VideoSource.YOUTUBE,
    url: "https://www.youtube.com/watch?v=mIytyDBN_kQ&list=PLTwQ_8_x1dDKbIBqcIrrscJPInzKjVhb7&index=3&t=337s&ab_channel=Fishing4Fun",
    videoType: VideoType.TUTORIAL,
    tutorialType:Tutorial.MONTURA,
    title: "MONTURA FEEDER",
  },
  {
    videoSource: VideoSource.YOUTUBE,
    url: "https://www.youtube.com/watch?v=EVEOfc2ZLN4&list=PLTwQ_8_x1dDKbIBqcIrrscJPInzKjVhb7&index=4&t=5s&ab_channel=Fishing4Fun",
    videoType: VideoType.TUTORIAL,
    tutorialType:Tutorial.MOMEALA,
    title: "MOMEALA SOMN FICAT DE PUI",
  },
  {
    videoSource: VideoSource.YOUTUBE,
    url: "https://www.youtube.com/watch?v=dv8rcVyrtwU&list=PLTwQ_8_x1dDLsvm0DESywOTj0OR8GAiRn&index=1&ab_channel=Fishing4Fun",
    videoType: VideoType.TUTORIAL,
    tutorialType:Tutorial.RETETA_CULINARA,
    title: "CIORBA DE PESTE",
    description:"O ciorba de peste foarte usor de facut, gustoasa si sanatoasa."
  },
 
];
