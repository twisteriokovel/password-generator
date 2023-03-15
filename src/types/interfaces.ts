import { CharacterType } from './enums'

type CharactersKeys = keyof typeof CharacterType;

export type CharactersSettings<T> = { [key in CharactersKeys]: T };

