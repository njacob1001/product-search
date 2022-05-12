export const convertToSrcSet = (src: string[]) => src.map((image, index) => `${image} ${index + 1}x`).join(', ')
