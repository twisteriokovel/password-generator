import { defineStore } from 'pinia'
import { CHARACTERS_LIST } from '../helpers/constants'
import { CharactersSettings } from '../types/interfaces'
import { CharacterType } from '../types/enums'

interface PasswordSettings {
  generatedPassword: string,
  length: number,
  charactersEnabled: CharactersSettings<boolean>
}

export const usePasswordSettingsStore = defineStore('passwordSettings', {
  state: (): PasswordSettings => ({
    generatedPassword: '',
    length: 10,
    charactersEnabled: {
      [ CharacterType.symbols ]: true,
      [ CharacterType.numbers ]: true,
      [ CharacterType.uppercaseLetters ]: true,
      [ CharacterType.lowercaseLetters ]: true
    }
  }),

  getters: {
    enabledCharacters (state): string {
      const charactersKeys = Object.keys(state.charactersEnabled) as Array<keyof typeof state.charactersEnabled>
      const charactersSetup = charactersKeys.filter(key => state.charactersEnabled[ key ])

      return charactersSetup.map(key => CHARACTERS_LIST[ key ]).join('')
    }
  },

  actions: {
    generatePassword () {
      let result = ''

      for (let i = 0; i < this.length; i++) {
        result += this.enabledCharacters.charAt(Math.floor(Math.random() * this.enabledCharacters.length))
      }

      this.generatedPassword = result
    }
  }
})
