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

const PASSWORD_MIN_LENGTH = 6
const PASSWORD_MAX_LENGTH = 32

export { AVAILABLE_LOCALES_LIST, CHARACTERS_LIST, PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH }
