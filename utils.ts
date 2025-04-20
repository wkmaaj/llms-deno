import {
  toCamelCase,
  toKebabCase,
  toPascalCase,
  toSnakeCase
} from 'jsr:@std/text'

export const toCamelCaseUtil = (str: string) => toCamelCase(str)

export const toKebabCaseUtil = (str: string) => toKebabCase(str)

export const toSnakeCaseUtil = (str: string) => toSnakeCase(str)

export const toPascalCaseUtil = (str: string) => toPascalCase(str)

if (import.meta.main) {
  console.log(toCamelCaseUtil('hello world'))
  console.log(toKebabCaseUtil('hello world'))
  console.log(toSnakeCaseUtil('hello world'))
  console.log(toPascalCaseUtil('hello world'))
}
