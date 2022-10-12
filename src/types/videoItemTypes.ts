export enum VideoType {
  TUTORIAL = 0,
  CAPTURI = 1,
  PARTIDE = 2,
  SHORT = 3,
}

export enum Tutorial {
  MONTURA = 0,
  MOMEALA = 1,
  RETETA_CULINARA = 2,
}

export enum VideoSource{
    YOUTUBE = 0,
    FACEBOOK = 1,
    TIKTOK = 2
}

export interface VideoItem {
  videoSource: VideoSource;
  url: string;
  videoType: VideoType;
  tutorialType?: Tutorial;
  title?: string;
  description?: string;
  materials?:string[];
}
