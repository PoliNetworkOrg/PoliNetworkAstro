export enum Languages {
    IT = 0, EN = 1
  }

export namespace Languages {
    export function toString(language: Languages): string {
        return Languages.values()[language].toLowerCase();
    }

    export function parse(language: string): Languages {
        return Languages.values().indexOf(language)
    }

    export function values(): string[]{
      return (Object.values(Languages).filter(value => typeof value === 'string') as string[]).map(element => {
        return element.toLowerCase()
      });
    }
    
}

export class MultilangString {
  readonly _langString: Map<Languages, string>; 
  
  constructor(langStrings: {string: string, language: Languages}[]){
    if(langStrings == null || langStrings.length == 0){
      throw Error("Language array cannot be null or empty")
    }
    this._langString = new Map<Languages, string>();
    langStrings.map((language) => {
      this._langString.set(language.language, language.string)
    })
  }

  get(language: Languages): string {
    const toReturn = this._langString.get(language);
    if (toReturn != undefined){
      return toReturn
    } else {
      const eng = this._langString.get(Languages.EN);
      if (eng != undefined){
        return eng
      }
      else {
        const [firstElement] = this._langString.values()
        return firstElement;
      }
    }
  }
}