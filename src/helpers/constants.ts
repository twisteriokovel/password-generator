import { CharacterType } from '../types/enums'
import { CharactersSettings } from '../types/interfaces'

const CHARACTERS_LIST: CharactersSettings<string> = {
  [ CharacterType.numbers ]: '0123456789',
  [ CharacterType.uppercaseLetters ]: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  [ CharacterType.lowercaseLetters ]: 'abcdefghijklmnopqrstuvwxyz',
  [ CharacterType.symbols ]: '-=~!@#$%^&*()_+[]\\{}|;:",./<>\''
}

const AVAILABLE_LOCALES_LIST = [
  {
    value: 'en',
    label: 'English'
  },
  {
    value: 'ua',
    label: 'Українська'
  }
]

export { AVAILABLE_LOCALES_LIST, CHARACTERS_LIST }
