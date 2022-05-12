import { convertToSrcSet } from './parseSrcset'

describe('covertToSrcset', () => {
  it('should return srcset', () => {
    const src = ['/img/1.jpg', '/img/2.jpg', '/img/3.jpg']
    const result = convertToSrcSet(src)
    expect(result).toBe('/img/1.jpg 1x, /img/2.jpg 2x, /img/3.jpg 3x')
  })
})
