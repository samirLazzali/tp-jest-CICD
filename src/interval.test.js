const Interval = require('./interval');

describe('overlaps', function () {
  let inter010 = new Interval(0, 10)
  let inter020 = new Interval(0, 20)
  let inter1020 = new Interval(10, 20)
  let inter50100 = new Interval(50, 100)
  let inter1010 = new Interval(10, 10)
  let inter105 = new Interval(10, 5)

  test('Overlap 0 10 identique => true', () => {
    expect(inter010.overlaps(inter010)).toBe(true)
  })
  test('Overlap 0 10 avec 0 20 => true ', () => {
    expect(inter010.overlaps(inter020)).toBe(true)
  })
  test('Overlap 0 20 avec 0 10 => true ', () => {
    expect(inter020.overlaps(inter010)).toBe(true)
  })
  test('Overlap 0 10 avec 10 20 => false', () => {
    expect(inter010.overlaps(inter1020)).toBe(false)
  })
  test('Overlap 10 20 avec 0 10 => false', () => {
    expect(inter1020.overlaps(inter010)).toBe(false)
  })
  test('Overlap 0 10 avec 50 100 => false', () => {
    expect(inter010.overlaps(inter50100)).toBe(false)
  })
  test('Overlap 50 100 avec 0 10 => false', () => {
    expect(inter50100.overlaps(inter010)).toBe(false)
  })
  test('Overlap 10 10 avec 10 10 => false', () => {
    expect(inter1010.overlaps(inter1010)).toBe(false)
  })
  test('Overlap 10 5 avec 10 10 => false', () => {
    expect(inter105.overlaps(inter1010)).toBe(false)
  })
  test('Overlap 10 10 avec 10 5 => false', () => {
    expect(inter1010.overlaps(inter105)).toBe(false)
  })
})

describe('includes', function () {
  let inter010 = new Interval(0, 10)
  let inter020 = new Interval(0, 20)
  let inter1020 = new Interval(10, 20)
  let inter50100 = new Interval(50, 100)
  let inter1010 = new Interval(10, 10)
  let inter510 = new Interval(5, 10)

  test('Includes 0 10 identique => true', () => {
    expect(inter010.includes(inter010)).toBe(true)
  })
  test('Includes 0 10 avec 0 20 => false ', () => {
    expect(inter010.includes(inter020)).toBe(false)
  })
  test('Includes 0 20 avec 0 10 => true ', () => {
    expect(inter020.includes(inter010)).toBe(true)
  })
  test('Includes 0 20 avec 10 20 => true ', () => {
    expect(inter020.includes(inter1020)).toBe(true)
  })
  test('Includes 0 20 avec 50 100 => false ', () => {
    expect(inter020.includes(inter50100)).toBe(false)
  })
  test('Includes 50 100 avec 0 20 => false ', () => {
    expect(inter50100.includes(inter020)).toBe(false)
  })
  test('Includes 5 10 avec 0 20 => false ', () => {
    expect(inter510.includes(inter020)).toBe(false)
  })
  test('Includes 0 20 avec 5 10 => true ', () => {
    expect(inter020.includes(inter510)).toBe(true)
  })
})