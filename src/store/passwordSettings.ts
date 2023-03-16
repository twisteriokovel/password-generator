import { defineStore } from 'pinia'
import { CHARACTERS_LIST } from '../helpers/constants'
import { CharactersSettings } from '../types/interfaces'
import { CharacterType } from '../types/enums'

interface PasswordSettings {
  generatedPassword: string,
  passwordLength: number,
  charactersEnabled: CharactersSettings<boolean>
}

export const usePasswordSettingsStore = defineStore('passwordSettings', {
  state: (): PasswordSettings => ({
    generatedPassword: '',
    passwordLength: 10,
    charactersEnabled: {
      [ CharacterType.symbols ]: true,
      [ CharacterType.numbers ]: true,
      [ CharacterType.uppercaseLetters ]: true,
      [ CharacterType.lowercaseLetters ]: true
    }
  }),

  getters: {
    charactersSetup (state) {
      const charactersKeys = Object.keys(state.charactersEnabled) as Array<keyof typeof state.charactersEnabled>

      return charactersKeys.filter(key => state.charactersEnabled[ key ])
    },

    enabledCharacters (): string {
      return this.charactersSetup.map(key => CHARACTERS_LIST[ key ]).join('')
    }
  },

  actions: {
    generatePassword () {
      let result = ''

      for (let i = 0; i < this.passwordLength - this.charactersSetup.length; i++) {
        result += this.enabledCharacters.charAt(Math.floor(Math.random() * this.enabledCharacters.length))
      }

      const symbolsToInclude = this.charactersSetup.map(key => {
        const pattern = CHARACTERS_LIST[ key ]

        return pattern[ Math.floor(Math.random() * (pattern.length - 1)) ]
      })

      result += symbolsToInclude.join('')

      this.generatedPassword = [...result].sort(() => Math.random() - 0.5).join('')
    }
  }
})
