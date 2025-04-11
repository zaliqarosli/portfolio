import localFont from 'next/font/local';

export const oratorStd = localFont({
  src: './fonts/OratorStd.woff',
  variable: '--font-orator-std',
});

export const graphik = localFont({
  src: [
    {
      path: './fonts/graphik-light-07-webfont.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/graphik-medium-05-webfont.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/graphik-regular-01-webfont.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-graphik',
});
