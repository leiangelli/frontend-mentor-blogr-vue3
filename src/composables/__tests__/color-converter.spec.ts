import { expect, test } from 'vitest'

import { toRgb, toHex, toHsl, toHwb } from '../color-converter'

const colorObj = {
  'hsl(32deg 100% 50% / 99%)': {
    hex: '#ff8800fc',
    rgb: 'rgba(255, 136, 0, 0.99)',
    hsl: 'hsla(32, 100%, 50%, 99%)',
    hwb: 'hwb(32deg 0% 0% / 99%)'
  },
  'hsl(240 100% 50%)': {
    hex: '#0000ff',
    rgb: 'rgb(0, 0, 255)',
    hsl: 'hsl(240, 100%, 50%)',
    hwb: 'hwb(240deg 0% 0%)'
  },
  'hsl(240,100%,50%,0.1)': {
    hex: '#0000ff1a',
    rgb: 'rgba(0, 0, 255, 0.1)',
    hsl: 'hsla(240, 100%, 50%, 0.1)',
    hwb: 'hwb(240deg 0% 0% / 10%)'
  },
  'hsl(3.14rad, 100%, 50%, 0.1)': {
    hex: '#00ffff1a',
    rgb: 'rgba(0, 255, 255, 0.1)',
    hsl: 'hsla(180, 100%, 50%, 0.1)',
    hwb: 'hwb(180deg 0% 0% / 10%)'
  },
  'hsl(200grad, 100%, 50%, 0.1)': {
    hex: '#00ffff1a',
    rgb: 'rgba(0, 255, 255, 0.1)',
    hsl: 'hsla(180, 100%, 50%, 0.1)',
    hwb: 'hwb(180deg 0% 0% / 10%)'
  },
  'hsl(0.8turn, 100%, 50%, 0.1)': {
    hex: '#cc00ff1a',
    rgb: 'rgba(204, 0, 255, 0.1)',
    hsl: 'hsla(288, 100%, 50%, 0.1)',
    hwb: 'hwb(288deg 0% 0% / 10%)'
  },
  'hsl(+170, +100%, +50%, +0.7)': {
    hex: '#00ffd5b3',
    rgb: 'rgba(0, 255, 213, 0.7)',
    hsl: 'hsla(170, 100%, 50%, 0.7)',
    hwb: 'hwb(170deg 0% 0% / 70%)'
  },
  'hsl(240.5, 99.99%, 49.999%, 0.9999)': {
    hex: '#0200ff',
    rgb: 'rgba(2, 0, 255, 0.9999)',
    hsl: 'hsla(240.5, 99.99%, 49.999%, 0.9999)',
    hwb: 'hwb(240deg 0% 0% / 99.99%)'
  },
  'hsl(.9, .99%, .999%, .9999)': {
    hex: '#030303',
    rgb: 'rgba(3, 3, 3, 0.9999)',
    hsl: 'hsla(0.9, 0.99%, 0.999%, 0.9999)',
    hwb: 'hwb(0deg 1% 99% / 99.99%)'
  },
  'hsl(0240, 0100%, 0050%, 01)': {
    hex: '#0000ff',
    rgb: 'rgb(0, 0, 255)',
    hsl: 'hsla(240, 100%, 50%, 1)',
    hwb: 'hwb(240deg 0% 0%)'
  },
  'hsl(240.0, 100.00%, 50.000%, 1.0000)': {
    hex: '#0000ff',
    rgb: 'rgb(0, 0, 255)',
    hsl: 'hsla(240, 100%, 50%, 1)',
    hwb: 'hwb(240deg 0% 0%)'
  },
  'hsl(2400, 1000%, 1000%, 10)': {
    hex: '#ffffff',
    rgb: 'rgb(255, 255, 255)',
    hsl: 'hsla(2400, 1000%, 1000%, 10)',
    hwb: 'hwb(0deg 100% 0%)'
  },
  'hsl(2.40e+2rad, 1.00e+2%, 5.00e+1%)': {
    hex: '#d0ff00',
    rgb: 'rgb(208, 255, 0)',
    hsl: 'hsl(71, 100%, 50%)',
    hwb: 'hwb(71deg 0% 0%)'
  },
  'hsl(-2400.01deg, -1000.5%, -1000.05%, -100)': {
    hex: '#00000000',
    rgb: 'rgb(0, 0, 0, 0)',
    hsl: 'hsl(-2400.01, 0%, 0%, 0)',
    hwb: 'hwb(0deg 0% 100% / 0%)'
  },
  'hsl(2.40e+2, 1.00e+2%, 5.00e+1%, 1E-3)': {
    hex: '#0000ff00',
    rgb: 'rgba(0, 0, 255, 0.001)',
    hsl: 'hsla(240, 100%, 50%, 0.001)',
    hwb: 'hwb(240deg 0% 0% / 0.1%)'
  },
  'hsl(240 100% 50% / 0.5)': {
    hex: '#0000ff80',
    rgb: 'rgba(0, 0, 255, 0.5)',
    hsl: 'hsla(240, 100%, 50%, 0.5)',
    hwb: 'hwb(240deg 0% 0% / 50%)'
  },
  'hsl(-240, -100%, -50%, -0.1)': {
    hex: '#00000000',
    rgb: 'rgb(0, 0, 0, 0)',
    hsl: 'hsl(0, 0%, 0%, 0)',
    hwb: 'hwb(0deg 0% 100% / 0%)'
  },
  'rgb(210 180 140)': {
    hex: '#d2b48c',
    rgb: 'rgb(210, 180, 140)',
    hsl: 'hsl(34, 43.7%, 68.6%)',
    hwb: 'hwb(34deg 55% 18%)'
  },
  'rgb(1e+2 34 34)': {
    hex: '#642222',
    rgb: 'rgb(100, 34, 34)',
    hsl: 'hsl(0, 49.3%, 26.3%)',
    hwb: 'hwb(0deg 13% 61%)'
  },
  'rgba(2.40e+2, 1.00e+2, 5.00e+1, 0.8)': {
    hex: '#f06432cc',
    rgb: 'rgba(240, 100, 50, 0.8)',
    hsl: 'hsla(16, 86.4%, 56.9%, 0.8)',
    hwb: 'hwb(16deg 20% 6% / 80%)'
  },
  'rgba(2.40e+2 1.40e+2 3.00e+1 / 90%)': {
    hex: '#f08c1ee6',
    rgb: 'rgba(240, 140, 30, 0.9)',
    hsl: 'hsla(31, 87.5%, 52.9%, 0.9)',
    hwb: 'hwb(31deg 12% 6% / 90%)'
  },
  'rgb(0 230 26)': {
    hex: '#00e61a',
    rgb: 'rgb(0, 230, 26)',
    hsl: 'hsl(127, 100%, 45.1%)',
    hwb: 'hwb(127deg 0% 10%)'
  },
  'rgba(2.40e+2 1.40e+2 3.00e+1 / 0.4E+2%)': {
    hex: '#f08c1e66',
    rgb: 'rgba(240, 140, 30, 0.4)',
    hsl: 'hsla(31, 87.5%, 52.9%, 0.4)',
    hwb: 'hwb(31deg 12% 6% / 40%)'
  },
  '#6163': {
    hex: '#6163',
    rgb: 'rgba(102, 17, 102, 0.20)',
    hsl: 'hsla(300, 71.4%, 23.3%, 0.2)',
    hwb: 'hwb(300deg 7% 60% / 20%)'
  },
  '#cd5c5cd6': {
    hex: '#cd5c5cd6',
    rgb: 'rgba(205, 92, 92, 0.84)',
    hsl: 'hsla(0, 53.1%, 58.2%, 0.84)',
    hwb: 'hwb(0deg 36% 20% / 84%)'
  },
  '#ffffff': {
    hex: '#ffffff',
    rgb: 'rgb(255, 255, 255)',
    hsl: 'hsl(0, 0%, 100%)',
    hwb: 'hwb(0deg 100% 0%)'
  },
  '#000': {
    hex: '#000',
    rgb: 'rgb(0, 0, 0)',
    hsl: 'hsl(0, 0%, 0%)',
    hwb: 'hwb(0deg 0% 100%)'
  }
}

test('color converter', () => {
  for (const color in colorObj) {
    if (Object.prototype.hasOwnProperty.call(colorObj, color)) {
      const curr = colorObj[color]

      expect(toRgb(color)).toBe(curr.rgb)
      expect(toHex(color)).toBe(curr.hex)
      expect(toHsl(color)).toBe(curr.hsl)
      expect(toHwb(color)).toBe(curr.hwb)
    }
  }
})
