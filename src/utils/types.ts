export enum Languages {
    IT, EN
  }

export interface LangString{
  string: string,
  language: Languages
}

export interface Project {
  title: string,
  page_titles: LangString[],
  img: string,
  subtitles: LangString[],
  cards: Card[]
}

interface Card {
  title: LangString[],
  desc: LangString[],
  link: string,
  img: string,
}

interface Button {

}