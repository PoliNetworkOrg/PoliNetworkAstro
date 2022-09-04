import { Languages } from "./types";

export function parseLanguage(language: string): Languages{
    if (language.toLowerCase() === 'it'){
        return Languages.IT
    } else{
        return Languages.EN
    }
}
