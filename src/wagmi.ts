import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  avalancheFuji
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: '94d1ee7a62c61f173708780f9876b6d3',
  chains: [avalancheFuji],
  ssr: true,
});