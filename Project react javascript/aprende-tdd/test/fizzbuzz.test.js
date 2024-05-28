import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'

// Escribir un programa que al pasarle un número.
//  -Muestra "fizz" si es múltiplo de 3.
//  -Muestra "buzz" si es múltiplo de 5.
//  -Muestra "fizzbuzz" si es múltiplo de 3 y 5.
//  -Muestra el número si no es múltiplo de ninguno de los anteriores

describe('fizzbuzz', () => {
  // Este test ya esta cubierto en el algoritmo
  // it('should be a function', () => {
  //   expect(typeof fizzbuzz).toBe('function')
  // })

  it('should throw if not number is provided as parameter', () => {
    expect(() => fizzbuzz()).toThrow()
  })

  it('should throw a specific error message if not number is proviced as parameter', () => {
    expect(() => fizzbuzz()).toThrow('parameter provided must be a number')
  })

  it('should throw a specific error message if not number is proviced.', () => {
    expect(() => fizzbuzz(NaN)).toThrow('parameter provided must be a number')
  })

  it('should return 1 if number provided is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })

  it('should return 2 if number provided is 2', () => {
    expect(fizzbuzz(2)).toBe(2)
  })

  it('should return "fizz" if number provided is 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })

  it('should return "fizz" if number provided is multiple of 3', () => {
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
  })

  it('should return "buzz" if number provided is multiple of 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
    expect(fizzbuzz(10)).toBe('buzz')
  })

  it('should return "fizzbuzz" if number provided is multiple of 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
  })

  it('should return "woff" if number provided is number 7', () => {
    expect(fizzbuzz(7)).toBe('woff')
  })
})
