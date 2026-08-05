// utils/consts.ts

/**
 * This project was developed by Nikandr Surkov.
 * You may not use this code if you purchased it from any source other than the official website https://nikandr.com.
 * If you purchased it from the official website, you may use it for your own projects,
 * but you may not resell it or publish it publicly.
 * 
 * Website: https://nikandr.com
 * YouTube: https://www.youtube.com/@NikandrSurkov
 * Telegram: https://t.me/nikandr_s
 * Telegram channel for news/updates: https://t.me/clicker_game_news
 * GitHub: https://github.com/nikandr-surkov
 */

import { crystal1, crystal2, crystal3, crystal4, crystal5, crystal6, crystal7, crystal8, crystal9, mainCharacter } from "@/images";
import { StaticImageData } from "next/image";

export interface SaleAsset {
  code: string;
  issuer: string;
  distributor: string;
}

export const SALE_ASSETS: SaleAsset[] = [
  {
    code: 'DTCCPROTOCOL',
    issuer: 'GB5SDXTYWRHILZA75HHG34OLHOFZSUFD2TVL45ZHFREZCPCTAGRTDTCC',
    distributor: 'GBRPNPT2HLXAMLZHOPT5JJVF3UZA33L7IYAK5SEF3AU2CAG2WJPXCQLD',
  },
  {
    code: 'XLMDEFI',
    issuer: 'GCWO6NHPJHYTDK22J4Z5ZC6Q35T6D5OR37MAI34DXLYRHANYPI6P5XLM',
    distributor: 'GAJOBBQLET34H77VXKCZYOZBKSMH76BI73CNEV6WWY2INYO3OLYWGS2K',
  },
  {
    code: 'XRPRESERVE',
    issuer: 'GALRBTUPQBJA3NAUXJIV3Z7XLASBMA5TT42RO4VHQWZKLOTZEWBAGXRP',
    distributor: 'GDHA5WTZNPCWK7LFT3ACWIV2MPT2Y5B7CJLCBIHUU7F4M3H7WOBZGXOR',
  },
  {
    code: 'XRPBANK',
    issuer: 'GDE4JULORNSGJNBBCYYPI7TPT7P5TJIEEVPLX4DQSRAKPNVVOLNY5XRP',
    distributor: 'GCENO6SCXAZJV6W4IELIIBJKMFFYXN2GSBJBY5B4LLIQEZN64LXFRKUX',
  },
  {
    code: 'XLMBANK',
    issuer: 'GBEWV2DIGJYM27FAWY2OFMONVYGZHSI2M5B7KJXMQ7JHT6JHGBOQZQFS',
    distributor: 'GCO45OTZGTKW6S6VBWIQFA2MCOQIHIVZMWHNWI7XNZY25TEYLFGUDJ5K',
  },
  {
    code: 'XLMCCA',
    issuer: 'GDD7TZFISIFW2NUYTX5LSVWNM6CP2OTYSNML4ISI3GDCSCUK3PKKNXLM',
    distributor: 'GBUR4TQUXQYKW43TZ6VJ7NPXNWIFSELPN5UUCYYAJSACFNKHFCD6GJKQ',
  },
  {
    code: 'RIPPLEMINT',
    issuer: 'GBGVV42A66UR2EYFUSYYGGED4MEAVCIXPJ3BS5XUNXU47BKKHRKABXRP',
    distributor: 'GA4RPIRYM76YDBNPAXVMXGMDALZ2S4GY7PKIO5AKL7PDCF35HDDFAUVF',
  },
  {
    code: 'QFSIRA',
    issuer: 'GBKWYI6BK3V5UGFAE6EWMHYO3HFEJJFXLULFKHITWV6BM3ICK77BKIRA',
    distributor: 'GBG6JX56SS55UAQ7ZORP26642BOT3AMQ2ZXONCXHFJCIDXHDIVTQHUFD',
  },
];

export const ALLOW_ALL_DEVICES = true;

export const WALLET_MANIFEST_URL = "https://violet-traditional-rabbit-103.mypinata.cloud/ipfs/QmcFgnfXoiNtp8dvy25xA9hMEjz5AzugTuPQNTHQMTw9Tf";

export interface LevelData {
  name: string;
  minPoints: number;
  bigImage: StaticImageData;
  smallImage: StaticImageData;
  color: string;
  friendBonus: number;
  friendBonusPremium: number;
}

export const LEVELS: LevelData[] = [
  {
    name: "Ice Cube Intern",
    minPoints: 0,
    bigImage: mainCharacter,
    smallImage: crystal1,
    color: "#2adaf8",
    friendBonus: 0,
    friendBonusPremium: 0,
  },
  {
    name: "Frosty Freelancer",
    minPoints: 5000,
    bigImage: mainCharacter,
    smallImage: crystal2,
    color: "#d64767",
    friendBonus: 20000,
    friendBonusPremium: 25000,
  },
  {
    name: "Chilly Consultant",
    minPoints: 25000,
    bigImage: mainCharacter,
    smallImage: crystal3,
    color: "#e9c970",
    friendBonus: 30000,
    friendBonusPremium: 50000,
  },
  {
    name: "Glacial Manager",
    minPoints: 100000,
    bigImage: mainCharacter,
    smallImage: crystal4,
    color: "#73e94b",
    friendBonus: 40000,
    friendBonusPremium: 75000,
  },
  {
    name: "Subzero Supervisor",
    minPoints: 1000000,
    bigImage: mainCharacter,
    smallImage: crystal5,
    color: "#4ef0ba",
    friendBonus: 60000,
    friendBonusPremium: 100000,
  },
  {
    name: "Arctic Executive",
    minPoints: 2000000,
    bigImage: mainCharacter,
    smallImage: crystal6,
    color: "#1a3ae8",
    friendBonus: 100000,
    friendBonusPremium: 150000,
  },
  {
    name: "Polar CEO",
    minPoints: 10000000,
    bigImage: mainCharacter,
    smallImage: crystal7,
    color: "#902bc9",
    friendBonus: 250000,
    friendBonusPremium: 500000,
  },
  {
    name: "Tundra Tycoon",
    minPoints: 50000000,
    bigImage: mainCharacter,
    smallImage: crystal8,
    color: "#fb8bee",
    friendBonus: 500000,
    friendBonusPremium: 1000000,
  },
  {
    name: "Iceberg Mogul",
    minPoints: 100000000,
    bigImage: mainCharacter,
    smallImage: crystal9,
    color: "#e04e92",
    friendBonus: 1000000,
    friendBonusPremium: 2000000,
  }
];

export const MAXIMUM_INACTIVE_TIME_FOR_MINE = 3*60*60*1000; // 3 hours in milliseconds

export const TASK_WAIT_TIME = 60 * 60 * 1000; // 1 hour in milliseconds

// Multitap
export const multitapUpgradeBasePrice = 1000;
export const multitapUpgradeCostCoefficient = 2;

export const multitapUpgradeBaseBenefit = 1;
export const multitapUpgradeBenefitCoefficient = 1;

// Energy
export const energyUpgradeBasePrice = 1000;
export const energyUpgradeCostCoefficient = 2;

export const energyUpgradeBaseBenefit = 500;
export const energyUpgradeBenefitCoefficient = 1;

// Mine (profit per hour)
export const mineUpgradeBasePrice = 1000;
export const mineUpgradeCostCoefficient = 1.5;

export const mineUpgradeBaseBenefit = 100;
export const mineUpgradeBenefitCoefficient = 1.2;

// Stellar token
export const MAIN_ASSET_CODE = "QINFRAX";
export const MAIN_ISSUER_ADDRESS = "GBLBEPHSDKMFMLDA7N5SLFBFBKBSIBI5PKI5JUTZVVOS4WQIWQHMHQFS";

export const STOCK_ASSET_CODE = "XLMSTOCK";
export const STOCK_ISSUER_ADDRESS = "GB2R4BM4AVPD25QSMOYWOKVTJW3T7M5EQA4PZUYDHERP267FQQAIGXLM";

export interface TierLevel {
  level: number;
  start: number;
  end: number;
  discountPercent: number;
  ownershipPercent: number;
  ///////////////////////////////
  isAdditionalBenifitsOnly?: boolean;
  additionalBenifits?: Array<{emoticon: string, text: string}>;
}

export const TierLevels: TierLevel[] = [
  {
    level: 0,
    start: 0,
    end: 249,
    discountPercent: 0,
    ownershipPercent: 0,
  },
  {
    level: 1,
    start: 250,
    end: 999,
    discountPercent: 0,
    ownershipPercent: 0.5,
    additionalBenifits: [
      { emoticon: "🔴", text: "250% daily in every reward asset" },
      { emoticon: "🤑", text: "100% XLM Daily for life" },
      { emoticon: "🤑", text: "100% XRP Daily for life" },
      { emoticon: "🤑", text: "100% USDC Daily for life" },
      { emoticon: "🔥", text: "100% RLUSD Daily for life" },
      { emoticon: "🏠", text: "10 Properties" },
      { emoticon: "🚗", text: "20 Cars" },
      { emoticon: "✈️", text: "1 Private Jet" },
      { emoticon: "🚤", text: "1 Mid Size Yacht" },
      { emoticon: "💳", text: "1,000,000 USD Bank Account" },
      { emoticon: "🏥", text: "1 MedBed AI Powered Entry Level" },
      { emoticon: "🛒", text: "1,000,000 Grocery Voucher" },
      { emoticon: "💼", text: "Personal Investment Manager" },
    ],
  },
  {
    level: 2,
    start: 1000,
    end: 2499,
    discountPercent: 0,
    ownershipPercent: 1,
    additionalBenifits: [
      { emoticon: "🔴", text: "650% daily in every reward asset" },
      { emoticon: "🤑", text: "300% XLM Daily for life" },
      { emoticon: "🤑", text: "300% XRP Daily for life" },
      { emoticon: "🤑", text: "300% USDC Daily for life" },
      { emoticon: "🔥", text: "300% RLUSD Daily for life" },
      { emoticon: "🏠", text: "30 Properties" },
      { emoticon: "🚗", text: "50 Cars" },
      { emoticon: "✈️", text: "3 Private Jets" },
      { emoticon: "🚁", text: "3 Helicopters" },
      { emoticon: "🚤", text: "3 Mid Level Yachts" },
      { emoticon: "💳", text: "3,000,000 USD Bank Account" },
      { emoticon: "🏥", text: "2 MedBed AI Powered Mid Level" },
      { emoticon: "🛒", text: "3,000,000 Grocery Voucher" },
      { emoticon: "💼", text: "Personal Investment Manager" },
      { emoticon: "💻", text: "Crypto Mining Factory Mid Size" },
      { emoticon: "🏖️", text: "2 Mid Size Islands" },
      { emoticon: "💸", text: "10,000,000 Investment Account" },
      { emoticon: "💵", text: "10,000,000 USD Cash" },
      { emoticon: "💶", text: "10,000,000 EUR Cash" },
      { emoticon: "💷", text: "10,000,000 GBP Cash" },
    ],
  },
  {
    level: 3,
    start: 2500,
    end: 4999,
    discountPercent: 0,
    ownershipPercent: 2.5,
    additionalBenifits: [
      { emoticon: "🔴", text: "1,500% daily in every reward asset" },
      { emoticon: "🤑", text: "1,000% XLM Daily for life" },
      { emoticon: "🤑", text: "1,000% XRP Daily for life" },
      { emoticon: "🤑", text: "1,000% USDC Daily for life" },
      { emoticon: "🔥", text: "1,000% RLUSD Daily for life" },
      { emoticon: "🏠", text: "100 Properties" },
      { emoticon: "🚗", text: "150 Cars" },
      { emoticon: "✈️", text: "10 Private Jets" },
      { emoticon: "🚁", text: "10 Helicopters" },
      { emoticon: "🚤", text: "10 Large Yachts" },
      { emoticon: "💳", text: "10,000,000 USD Bank Account" },
      { emoticon: "🏥", text: "5 MedBed AI-Powered High Level" },
      { emoticon: "🛒", text: "10,000,000 Grocery Voucher" },
      { emoticon: "💼", text: "Personal Investment Manager" },
      { emoticon: "💻", text: "Crypto Mining Factory Large Size" },
      { emoticon: "🏖️", text: "5 Large Islands" },
      { emoticon: "💸", text: "30,000,000 Investment Account" },
      { emoticon: "💵", text: "30,000,000 USD Cash" },
      { emoticon: "💶", text: "30,000,000 EUR Cash" },
      { emoticon: "💷", text: "10,000,000 GBP Cash" },
      { emoticon: "⛽️", text: "10 Gas Stations Business" },
      { emoticon: "📈", text: "30,000,000 USD Stock Portfolio" },
      { emoticon: "🥇", text: "30,000,000 USD in Real GOLD" },
    ],
  },
  {
    level: 4,
    start: 5000,
    end: 9999,
    discountPercent: 0,
    ownershipPercent: 5,
    additionalBenifits: [
      { emoticon: "🔴", text: "4,000% daily in every reward asset" },
      { emoticon: "🤑", text: "3,000% XLM Daily for life" },
      { emoticon: "🤑", text: "3,000% XRP Daily for life" },
      { emoticon: "🤑", text: "3,000% USDC Daily for life" },
      { emoticon: "🔥", text: "3,000% RLUSD Daily for life" },
      { emoticon: "🏠", text: "300 Properties" },
      { emoticon: "🚗", text: "450 Cars" },
      { emoticon: "✈️", text: "30 Private Jets" },
      { emoticon: "🚁", text: "30 Helicopters" },
      { emoticon: "🚤", text: "30 Large Yachts" },
      { emoticon: "💳", text: "30,000,000 USD Bank Account" },
      { emoticon: "🏥", text: "10 MedBed AI-Powered (Advanced Level)" },
      { emoticon: "🛒", text: "30,000,000 Grocery Voucher" },
      { emoticon: "💼", text: "Personal Investment Company" },
      { emoticon: "💻", text: "Crypto Mining Factory Industrial Size" },
      { emoticon: "🏖️", text: "15 Large Islands" },
      { emoticon: "💸", text: "100,000,000 Investment Account" },
      { emoticon: "💵", text: "100,000,000 USD Cash" },
      { emoticon: "💶", text: "100,000,000 EUR Cash" },
      { emoticon: "💷", text: "100,000,000 GBP Cash" },
      { emoticon: "⛽️", text: "30 Gas Station Businesses" },
      { emoticon: "📈", text: "100,000,000 USD Stock Portfolio" },
      { emoticon: "🥇", text: "100,000,000 USD in Real GOLD" },
      { emoticon: "💸", text: "100,000,000 USD Crypto Investment Account" },
      { emoticon: "🏨", text: "10 Hotel Buildings" },
      { emoticon: "🛳️", text: "10 Cargo Ships" },
    ],
  },
  {
    level: 5,
    start: 10000,
    end: 24999,
    discountPercent: 0,
    ownershipPercent: 10,
    additionalBenifits: [
      { emoticon: "🔴", text: "10,000% daily in every reward asset" },
      { emoticon: "🤑", text: "10,000% XLM Daily for life" },
      { emoticon: "🤑", text: "10,000% XRP Daily for life" },
      { emoticon: "🤑", text: "10,000% USDC Daily for life" },
      { emoticon: "🔥", text: "10,000% RLUSD Daily for life" },
      { emoticon: "🏠", text: "1,000 properties" },
      { emoticon: "🚗", text: "1,500 cars" },
      { emoticon: "✈️", text: "100 Private Jets" },
      { emoticon: "🚁", text: "100 Helicopters" },
      { emoticon: "🚤", text: "100 Large Yachts" },
      { emoticon: "💳", text: "100,000,000 USD Bank Account" },
      { emoticon: "🏥", text: "Advanced MedBed Hospital" },
      { emoticon: "🛒", text: "100,000,000 USD Grocery Voucher" },
      { emoticon: "💼", text: "Personal Investment Company" },
      { emoticon: "💻", text: "Crypto Mining Factory Industrial Size" },
      { emoticon: "🏖️", text: "45 Large Islands" },
      { emoticon: "💸", text: "500,000,000 Investment Account" },
      { emoticon: "💵", text: "500,000,000 USD Cash" },
      { emoticon: "💶", text: "500,000,000 EUR Cash" },
      { emoticon: "💷", text: "500,000,000 GBP Cash" },
      { emoticon: "⛽️", text: "Oil Refinery Business + 100 gas stations" },
      { emoticon: "📈", text: "500,000,000 USD Stock Portfolio" },
      { emoticon: "🥇", text: "500,000,000 USD in Real GOLD" },
      { emoticon: "💸", text: "500,000,000 USD Crypto Investment Account" },
      { emoticon: "🏨", text: "30 Hotel Buildings Business" },
      { emoticon: "🛳️", text: "20 Cargo Ships" },
      { emoticon: "🏦", text: "Your Own Bank with $500,000,000 Starting Capital" },
      { emoticon: "📊", text: "Accounting and Management Business" },
      { emoticon: "⚽", text: "1 Sports Team — Any Desired Sport" },
    ],
  },
  {
    level: 6,
    start: 25000,
    end: 49999,
    discountPercent: 0,
    ownershipPercent: 15,
    additionalBenifits: [
      { emoticon: "🔴", text: "25,000% daily in every reward asset" },
      { emoticon: "🤑", text: "30,000% XLM Daily for life" },
      { emoticon: "🤑", text: "30,000% XRP Daily for life" },
      { emoticon: "🤑", text: "30,000% USDC Daily for life" },
      { emoticon: "🔥", text: "30,000% RLUSD Daily for life" },
      { emoticon: "🏠", text: "3,000 Properties" },
      { emoticon: "🚗", text: "4,500 Cars" },
      { emoticon: "✈️", text: "300 Private Jets" },
      { emoticon: "🚁", text: "300 Helicopters" },
      { emoticon: "🚤", text: "300 Mega Yachts" },
      { emoticon: "💳", text: "300,000,000 USD Bank Account" },
      { emoticon: "🏥", text: "5 Advanced MedBed Hospitals" },
      { emoticon: "🛒", text: "Grocery & Retail Business" },
      { emoticon: "💼", text: "Personal Investment Company" },
      { emoticon: "💻", text: "Crypto Mining Factory Industrial Size" },
      { emoticon: "🏖️", text: "100 Large Islands" },
      { emoticon: "💸", text: "$2 Billion Investment Account" },
      { emoticon: "💵", text: "2 Billion USD Cash" },
      { emoticon: "💶", text: "2 Billion EUR Cash" },
      { emoticon: "💷", text: "2 Billion GBP Cash" },
      { emoticon: "⛽️", text: "Oil Refinery Business + 300 gas stations" },
      { emoticon: "📈", text: "$2 Billion USD Stock Portfolio" },
      { emoticon: "🥇", text: "$2 Billion USD in real GOLD" },
      { emoticon: "💸", text: "$2 Billion USD Crypto Investment Account" },
      { emoticon: "🏨", text: "100 Hotel Buildings Business" },
      { emoticon: "🛳️", text: "50 Cargo Ships" },
      { emoticon: "🏦", text: "Your Own Bank with $5 Billion Starting Capital" },
      { emoticon: "📊", text: "Accounting and Management Business" },
      { emoticon: "⚽", text: "5 Sports Team Any Desired Sport" },
      { emoticon: "⛏️", text: "3 Mining Companies" },
      { emoticon: "🚗", text: "EV Car Company with Factory" },
      { emoticon: "💫", text: "Your Own ISO20022 Compliant Token" },
    ],
  },
  {
    level: 7,
    start: 50000,
    end: 99999,
    discountPercent: 0,
    ownershipPercent: 20,
    additionalBenifits: [
      { emoticon: "🔴", text: "60,000% daily in every reward asset" },
      { emoticon: "🤑", text: "100,000% XLM Daily for life" },
      { emoticon: "🤑", text: "100,000% XRP Daily for life" },
      { emoticon: "🤑", text: "100,000% USDC Daily for life" },
      { emoticon: "🔥", text: "100,000% RLUSD Daily for life" },
      { emoticon: "🏠", text: "10,000 Properties" },
      { emoticon: "🚗", text: "12,500 Cars" },
      { emoticon: "✈️", text: "900 Private Jets" },
      { emoticon: "🚁", text: "900 Helicopters" },
      { emoticon: "🚤", text: "900 Mega Yachts" },
      { emoticon: "💳", text: "900,000,000 USD Bank Account" },
      { emoticon: "🏥", text: "15 Advanced MedBed Hospitals" },
      { emoticon: "🛒", text: "20 Grocery & Retail Businesses" },
      { emoticon: "💼", text: "Personal Investment Company" },
      { emoticon: "💻", text: "Crypto Mining Factory Industrial Size" },
      { emoticon: "🏖️", text: "250 Large Islands" },
      { emoticon: "💸", text: "$6 Billion Investment Account" },
      { emoticon: "💵", text: "6 Billion USD Cash" },
      { emoticon: "💶", text: "6 Billion EUR Cash" },
      { emoticon: "💷", text: "6 Billion GBP Cash" },
      { emoticon: "⛽️", text: "Oil Refinery Business + 900 gas stations" },
      { emoticon: "📈", text: "$6 Billion USD Stock Portfolio" },
      { emoticon: "🥇", text: "$6 Billion USD in Real GOLD" },
      { emoticon: "💸", text: "$6 Billion USD Crypto Investment Account" },
      { emoticon: "🏨", text: "300 Hotel Buildings Business" },
      { emoticon: "🛳️", text: "150 Cargo Ships" },
      { emoticon: "🏦", text: "Your Own Bank with $250 Billion Starting Capital" },
      { emoticon: "📊", text: "Accounting and Management Business" },
      { emoticon: "⚽", text: "15 Sports Team Any Desired Sport" },
      { emoticon: "⛏️", text: "10 Mining Companies" },
      { emoticon: "🚗", text: "EV Car Company with 3 factories" },
      { emoticon: "💫", text: "Your Own ISO20022 Compliant Token" },
      { emoticon: "✈️", text: "5 Airports Business" },
      { emoticon: "🌾", text: "Global Agriculture Empire $5 Billion" },
      { emoticon: "❤️", text: "Global Charity Foundation $2 Billion" },
    ],
  },
  {
    level: 8,
    start: 100000,
    end: 249999,
    discountPercent: 0,
    ownershipPercent: 30,
    additionalBenifits: [
      { emoticon: "🔴", text: "150,000% daily in every reward asset" },
      { emoticon: "🤑", text: "300,000% XLM Daily for life" },
      { emoticon: "🤑", text: "300,000% XRP Daily for life" },
      { emoticon: "🤑", text: "300,000% USDC Daily for life" },
      { emoticon: "🔥", text: "300,000% RLUSD Daily for life" },
      { emoticon: "🏠", text: "30,000 Properties" },
      { emoticon: "🚗", text: "30,000 Cars" },
      { emoticon: "✈️", text: "3,000 Private Jets" },
      { emoticon: "🚁", text: "3,000 Helicopters" },
      { emoticon: "🚤", text: "3,000 Mega Yachts" },
      { emoticon: "💳", text: "$3 Billion USD Bank Account" },
      { emoticon: "🏥", text: "45 Advanced MedBed Hospitals" },
      { emoticon: "🛒", text: "60 Grocery & Retail Businesses" },
      { emoticon: "💼", text: "Personal Investment Company" },
      { emoticon: "💻", text: "Crypto Mining Factory Industrial Size" },
      { emoticon: "🏖️", text: "500 Large Islands" },
      { emoticon: "💸", text: "$30 Billion Investment Account" },
      { emoticon: "💵", text: "30 Billion USD Cash" },
      { emoticon: "💶", text: "30 Billion EUR Cash" },
      { emoticon: "💷", text: "30 Billion GBP Cash" },
      { emoticon: "⛽️", text: "Oil Refinery Business and 2000+ gas stations" },
      { emoticon: "📈", text: "$30 Billion USD Stock Portfolio" },
      { emoticon: "🥇", text: "$30 Billion USD in real GOLD" },
      { emoticon: "💸", text: "$30 Billion USD Crypto Investment Account" },
      { emoticon: "🏨", text: "900 Hotel Buildings Business" },
      { emoticon: "🛳️", text: "300 Cargo Ships" },
      { emoticon: "🏦", text: "Your Own Bank with $1 Trillion Capital" },
      { emoticon: "📊", text: "Accounting and Managing Business" },
      { emoticon: "⚽", text: "35 Sports Team Any Desired Sport" },
      { emoticon: "⛏️", text: "30 Mining Companies" },
      { emoticon: "🚗", text: "EV Car Company with 10 factories" },
      { emoticon: "💫", text: "Your Own ISO20022 Compliant Token" },
      { emoticon: "✈️", text: "5 Airport Businesses" },
      { emoticon: "🌾", text: "Global Agriculture Empire - $15 Billion" },
      { emoticon: "❤️", text: "Global Charity Foundation - $6 Billion" },
      { emoticon: "🤖", text: "Quantum AI System (Powerful Tool)" },
      { emoticon: "🛰️", text: "Space Mining Company" },
      { emoticon: "💧", text: "Water Purification & Supply Business" },
    ],
  },
  {
    level: 9,
    start: 250000,
    end: 499999,
    discountPercent: 0,
    ownershipPercent: 40,
    additionalBenifits: [
      { emoticon: "🔴", text: "300,000% daily in every reward asset" },
      { emoticon: "🤑", text: "900,000% XLM Daily for life" },
      { emoticon: "🤑", text: "900,000% XRP Daily for life" },
      { emoticon: "🤑", text: "900,000% USDC Daily for life" },
      { emoticon: "🔥", text: "900,000% RLUSD Daily for life" },
      { emoticon: "🏠", text: "90,000 Properties" },
      { emoticon: "🚗", text: "90,000 Cars" },
      { emoticon: "✈️", text: "9,000 Private Jets" },
      { emoticon: "🚁", text: "9,000 Helicopters" },
      { emoticon: "🚤", text: "9,000 Mega Yachts" },
      { emoticon: "💳", text: "$9 Billion USD Bank Account" },
      { emoticon: "🏥", text: "100 Advanced MedBed Hospitals" },
      { emoticon: "🛒", text: "250 Grocery & Retail Businesses" },
      { emoticon: "💼", text: "10 Personal Investment Companies" },
      { emoticon: "💻", text: "50 Crypto Mining Factory Industrial Size" },
      { emoticon: "🏖️", text: "1,000 Large Islands" },
      { emoticon: "💸", text: "$90 Billion Investment Account" },
      { emoticon: "💵", text: "90 Billion USD Cash" },
      { emoticon: "💶", text: "90 Billion EUR Cash" },
      { emoticon: "💷", text: "90 Billion GBP Cash" },
      { emoticon: "⛽️", text: "Oil Refinery Business and 6000+ gas stations" },
      { emoticon: "📈", text: "$90 Billion USD Stock Portfolio" },
      { emoticon: "🥇", text: "$90 Billion USD in real GOLD" },
      { emoticon: "💸", text: "$90 Billion USD Crypto Investment Account" },
      { emoticon: "🏨", text: "2,000 Hotel Buildings Business" },
      { emoticon: "🛳️", text: "900 Cargo Ships" },
      { emoticon: "🏦", text: "5 Own Banks with $3 Trillion Capital" },
      { emoticon: "📊", text: "10 Accounting and Managing Business" },
      { emoticon: "⚽", text: "60 Sports Team Any Desired Sport" },
      { emoticon: "⛏️", text: "80 Mining Companies" },
      { emoticon: "🚗", text: "EV Car Company with 25 factories" },
      { emoticon: "💫", text: "Your Own ISO20022 Compliant Token" },
      { emoticon: "✈️", text: "5 Airports Business" },
      { emoticon: "🌾", text: "Global Agriculture Empire $25 Billion" },
      { emoticon: "❤️", text: "Global Charity Foundation $20 Billion" },
      { emoticon: "🤖", text: "Quantum AI System (powerful tool)" },
      { emoticon: "🛰️", text: "3 Space Mining Companies" },
      { emoticon: "💧", text: "3 Water Purification & Supply Business" },
      { emoticon: "🔐", text: "Quantum Wallet Security System" },
      { emoticon: "💳", text: "QFS Card" },
    ],
  },
  {
    level: 10,
    start: 500000,
    end: Infinity, //749999,
    discountPercent: 0,
    ownershipPercent: 50,
    additionalBenifits: [
      { emoticon: "🔴", text: "500,000% daily in every reward asset" },
      { emoticon: "⭐", text: "100 Special Reward Assets - TBA" },
      { emoticon: "🤑", text: "1,600,000% XLM Daily for life" },
      { emoticon: "🤑", text: "1,600,000% XRP Daily for life" },
      { emoticon: "🤑", text: "1,600,000% USDC Daily for life" },
      { emoticon: "🔥", text: "1,600,000% RLUSD Daily for life" },
      { emoticon: "🏠", text: "200,000 Properties" },
      { emoticon: "🚗", text: "200,000 Cars" },
      { emoticon: "✈️", text: "30,000 Private Jets" },
      { emoticon: "🚁", text: "30,000 Helicopters" },
      { emoticon: "🚤", text: "30,000 Mega Yachts" },
      { emoticon: "💳", text: "$30 Billion USD Bank Account" },
      { emoticon: "🏥", text: "300 Advanced MedBed Hospitals" },
      { emoticon: "🛒", text: "750 Grocery & Retail Businesses" },
      { emoticon: "💼", text: "25 Personal Investment Companies" },
      { emoticon: "💻", text: "150 Crypto Mining Factory Industrial Size" },
      { emoticon: "🏖️", text: "3,000 Large Islands" },
      { emoticon: "💸", text: "$300 Billion Investment Account" },
      { emoticon: "💵", text: "300 Billion USD Cash" },
      { emoticon: "💶", text: "300 Billion EUR Cash" },
      { emoticon: "💷", text: "300 Billion GBP Cash" },
      { emoticon: "⛽️", text: "Oil Refinery Business and 15,000+ gas stations" },
      { emoticon: "📈", text: "$300 Billion USD Stock Portfolio" },
      { emoticon: "🥇", text: "$300 Billion USD in real GOLD" },
      { emoticon: "💸", text: "$300 Billion USD Crypto Investment Account" },
      { emoticon: "🏨", text: "6,000 Hotel Buildings Business" },
      { emoticon: "🛳️", text: "2,000 Cargo Ships" },
      { emoticon: "🏦", text: "10 Own Banks with $50 Trillion Capital" },
      { emoticon: "📊", text: "30 Accounting and Managing Business" },
      { emoticon: "⚽", text: "200 Sports Team Any Desired Sport" },
      { emoticon: "⛏️", text: "200 Mining Companies" },
      { emoticon: "🚗", text: "EV Car Company with 75 factories" },
      { emoticon: "💫", text: "Your Own ISO20022 Compliant Token" },
      { emoticon: "✈️", text: "15 Airports Business" },
      { emoticon: "🌾", text: "Global Agriculture Empire $50 Billion" },
      { emoticon: "❤️", text: "Global Charity Foundation $40 Billion" },
      { emoticon: "🤖", text: "3 Quantum AI System (powerful tool)" },
      { emoticon: "🛰️", text: "9 Space Mining Companies" },
      { emoticon: "💧", text: "9 Water Purification & Supply Business" },
      { emoticon: "🔐", text: "Quantum Wallet Security System" },
      { emoticon: "💳", text: "3 QFS Cards" },
      { emoticon: "🌍", text: "Planetary Ownership Rights" },
    ],
  }
];

export const getTierLevel = (userBalance: number): TierLevel | null => {
  if (userBalance > TierLevels[TierLevels.length-1].end) {
    return TierLevels[TierLevels.length-1];
  }
  const v = TierLevels.find(level => userBalance >= level.start && userBalance <= level.end)
  return v ? v : null;
};

export interface StakingLevel { 
  level: number;
  start: number;
  end: number;
  xlm: number;
  xrp: number;
  usdc: number;
  tvl: number;
}

export const StakingLevels: StakingLevel[] = [
  {
    level: 1,
    start: 0,
    end: 299999,
    xlm: 0,
    xrp: 0,
    usdc: 0,
    tvl: 0,
  },
  {
    level: 2,
    start: 300000,
    end: 1499999,
    xlm: 2250,
    xrp: 112,
    usdc: 75,
    tvl: 900,
  },
  {
    level: 3,
    start: 1500000,
    end: 4999999,
    xlm: 6250,
    xrp: 312,
    usdc: 195,
    tvl: 2850,
  },
  {
    level: 4,
    start: 5000000,
    end: 14999999,
    xlm: 18750,
    xrp: 1250,
    usdc: 468,
    tvl: 8100,
  },
  {
    level: 5,
    start: 15000000,
    end: 99999999,
    xlm: 62500,
    xrp: 3750,
    usdc: 1563,
    tvl: 32800,
  },
  {
    level: 6,
    start: 100000000,
    end: Infinity,
    xlm: 234375,
    xrp: 10937,
    usdc: 4688,
    tvl: 132000,
  },
];

export const getStakingLevel = (userBalance: number): StakingLevel | null => {
  if (userBalance > StakingLevels[StakingLevels.length-1].end) {
    return StakingLevels[StakingLevels.length-1];
  }
  const v = StakingLevels.find(level => userBalance >= level.start && userBalance <= level.end)
  return v ? v : null;
};

export interface StockLevel { 
  level: number;
  start: number;
  end: number;
  stocks: Array<StockHolding>;
}

export interface StockHolding {
  name: string;
  code: string;
  amount: number;
}

export const StockLevels: StockLevel[] = [
  {
    level: 0,
    start: 0,
    end: 99_999,
    stocks: [],
  },
  {
    level: 1,
    start: 100_000,
    end: 300_000,
    stocks: [
      { name: 'Apple', code: 'AAPL', amount: 10.25 },
      { name: 'Tesla', code: 'TSLA', amount: 6.5 },
      { name: 'Google', code: 'GOOG', amount: 12.25 },
      { name: 'Microsoft', code: 'MSFT', amount: 5.5 },
      { name: 'Amazon', code: 'AMZN', amount: 9 },
      { name: 'Nvidia', code: 'NVDA', amount: 16.5 },
      { name: 'Meta', code: 'META', amount: 3 },
      { name: 'Visa', code: 'V', amount: 5 },
      { name: 'JPMorgan Chase', code: 'JPM', amount: 5.5 },
      { name: 'Johnson & Johnson', code: 'JNJ', amount: 2.5 },
      { name: 'Walmart', code: 'WMT', amount: 3 },
      { name: 'UnitedHealth', code: 'UNH', amount: 2.8 },
      { name: 'Home Depot', code: 'HD', amount: 2.5 },
      { name: 'Walt Disney', code: 'DIS', amount: 3 },
      { name: 'PayPal', code: 'PYPL', amount: 2.25 },
    ],
  },
  {
    level: 2,
    start: 300_001,
    end: 1_500_000,
    stocks: [
      { name: 'Apple', code: 'AAPL', amount: 50 },
      { name: 'Tesla', code: 'TSLA', amount: 31.5 },
      { name: 'Google', code: 'GOOG', amount: 62.5 },
      { name: 'Microsoft', code: 'MSFT', amount: 28 },
      { name: 'Amazon', code: 'AMZN', amount: 47 },
      { name: 'Nvidia', code: 'NVDA', amount: 82 },
      { name: 'Meta', code: 'META', amount: 15 },
      { name: 'Visa', code: 'V', amount: 23 },
      { name: 'JPMorgan Chase', code: 'JPM', amount: 26 },
      { name: 'Johnson & Johnson', code: 'JNJ', amount: 11.5 },
      { name: 'Walmart', code: 'WMT', amount: 16 },
      { name: 'UnitedHealth', code: 'UNH', amount: 14 },
      { name: 'Home Depot', code: 'HD', amount: 11.5 },
      { name: 'Walt Disney', code: 'DIS', amount: 15 },
      { name: 'PayPal', code: 'PYPL', amount: 10.25 },
    ],
  },
  {
    level: 3,
    start: 1_500_001,
    end: 5_000_000,
    stocks: [
      { name: 'Apple', code: 'AAPL', amount: 125 },
      { name: 'Tesla', code: 'TSLA', amount: 78 },
      { name: 'Google', code: 'GOOG', amount: 155 },
      { name: 'Microsoft', code: 'MSFT', amount: 70 },
      { name: 'Amazon', code: 'AMZN', amount: 125 },
      { name: 'Nvidia', code: 'NVDA', amount: 220 },
      { name: 'Meta', code: 'META', amount: 40 },
      { name: 'Visa', code: 'V', amount: 60 },
      { name: 'JPMorgan Chase', code: 'JPM', amount: 70 },
      { name: 'Johnson & Johnson', code: 'JNJ', amount: 30 },
      { name: 'Walmart', code: 'WMT', amount: 45 },
      { name: 'UnitedHealth', code: 'UNH', amount: 40 },
      { name: 'Home Depot', code: 'HD', amount: 30 },
      { name: 'Walt Disney', code: 'DIS', amount: 40 },
      { name: 'PayPal', code: 'PYPL', amount: 35 },
      { name: 'Netflix', code: 'NFLX', amount: 25 },
    ],
  },
  {
    level: 4,
    start: 5_000_001,
    end: 15_000_000,
    stocks: [
      { name: 'Apple', code: 'AAPL', amount: 250 },
      { name: 'Tesla', code: 'TSLA', amount: 155 },
      { name: 'Google', code: 'GOOG', amount: 310 },
      { name: 'Microsoft', code: 'MSFT', amount: 140 },
      { name: 'Amazon', code: 'AMZN', amount: 250 },
      { name: 'Nvidia', code: 'NVDA', amount: 440 },
      { name: 'Meta', code: 'META', amount: 80 },
      { name: 'Visa', code: 'V', amount: 120 },
      { name: 'JPMorgan Chase', code: 'JPM', amount: 140 },
      { name: 'Johnson & Johnson', code: 'JNJ', amount: 60 },
      { name: 'Walmart', code: 'WMT', amount: 90 },
      { name: 'UnitedHealth', code: 'UNH', amount: 80 },
      { name: 'Home Depot', code: 'HD', amount: 60 },
      { name: 'Walt Disney', code: 'DIS', amount: 80 },
      { name: 'PayPal', code: 'PYPL', amount: 70 },
      { name: 'Netflix', code: 'NFLX', amount: 50 },
      { name: 'Pfizer', code: 'PFE', amount: 40 },
      { name: 'Coca-Cola', code: 'KO', amount: 50 },
      { name: 'PepsiCo', code: 'PEP', amount: 60 },
      { name: 'Merck', code: 'MRK', amount: 40 },
      { name: 'Intel', code: 'INTC', amount: 60 },
      { name: 'Cisco', code: 'CSCO', amount: 40 },
      { name: 'ExxonMobil', code: 'XOM', amount: 50 },
      { name: 'Chevron', code: 'CVX', amount: 50 },
      { name: 'Abbott Laboratories', code: 'ABT', amount: 40 },
    ],
  },
  {
    level: 5,
    start: 15_000_001,
    end: 35_000_000,
    stocks: [
      { name: 'Apple', code: 'AAPL', amount: 500 },
      { name: 'Tesla', code: 'TSLA', amount: 310 },
      { name: 'Google', code: 'GOOG', amount: 620 },
      { name: 'Microsoft', code: 'MSFT', amount: 280 },
      { name: 'Amazon', code: 'AMZN', amount: 500 },
      { name: 'Nvidia', code: 'NVDA', amount: 880 },
      { name: 'Meta', code: 'META', amount: 160 },
      { name: 'Visa', code: 'V', amount: 240 },
      { name: 'JPMorgan Chase', code: 'JPM', amount: 280 },
      { name: 'Johnson & Johnson', code: 'JNJ', amount: 120 },
      { name: 'Walmart', code: 'WMT', amount: 180 },
      { name: 'UnitedHealth', code: 'UNH', amount: 160 },
      { name: 'Home Depot', code: 'HD', amount: 120 },
      { name: 'Walt Disney', code: 'DIS', amount: 160 },
      { name: 'PayPal', code: 'PYPL', amount: 150 },
      { name: 'Netflix', code: 'NFLX', amount: 100 },
      { name: 'Pfizer', code: 'PFE', amount: 80 },
      { name: 'Coca-Cola', code: 'KO', amount: 100 },
      { name: 'PepsiCo', code: 'PEP', amount: 120 },
      { name: 'Merck', code: 'MRK', amount: 80 },
      { name: 'Intel', code: 'INTC', amount: 120 },
      { name: 'Cisco', code: 'CSCO', amount: 80 },
      { name: 'ExxonMobil', code: 'XOM', amount: 100 },
      { name: 'Chevron', code: 'CVX', amount: 100 },
      { name: 'Abbott Laboratories', code: 'ABT', amount: 80 },
    ],
  },
  {
    level: 6,
    start: 35_000_001,
    end: 100_000_000,
    stocks: [
      { name: 'Apple', code: 'AAPL', amount: 1000 },
      { name: 'Tesla', code: 'TSLA', amount: 620 },
      { name: 'Google', code: 'GOOG', amount: 1250 },
      { name: 'Microsoft', code: 'MSFT', amount: 560 },
      { name: 'Amazon', code: 'AMZN', amount: 1000 },
      { name: 'Nvidia', code: 'NVDA', amount: 1760 },
      { name: 'Meta', code: 'META', amount: 320 },
      { name: 'Visa', code: 'V', amount: 480 },
      { name: 'JPMorgan Chase', code: 'JPM', amount: 560 },
      { name: 'Johnson & Johnson', code: 'JNJ', amount: 240 },
      { name: 'Walmart', code: 'WMT', amount: 360 },
      { name: 'UnitedHealth', code: 'UNH', amount: 320 },
      { name: 'Home Depot', code: 'HD', amount: 240 },
      { name: 'Walt Disney', code: 'DIS', amount: 320 },
      { name: 'PayPal', code: 'PYPL', amount: 300 },
      { name: 'Netflix', code: 'NFLX', amount: 200 },
      { name: 'Pfizer', code: 'PFE', amount: 160 },
      { name: 'Coca-Cola', code: 'KO', amount: 200 },
      { name: 'PepsiCo', code: 'PEP', amount: 240 },
      { name: 'Merck', code: 'MRK', amount: 160 },
      { name: 'Intel', code: 'INTC', amount: 240 },
      { name: 'Cisco', code: 'CSCO', amount: 160 },
      { name: 'ExxonMobil', code: 'XOM', amount: 200 },
      { name: 'Chevron', code: 'CVX', amount: 200 },
      { name: 'Abbott Laboratories', code: 'ABT', amount: 160 },
    ],
  },
  {
    level: 7,
    start: 100_000_001,
    end: Infinity,// 250_000_000,
    stocks: [
      { name: 'Apple', code: 'AAPL', amount: 2500 },
      { name: 'Tesla', code: 'TSLA', amount: 1550 },
      { name: 'Google', code: 'GOOG', amount: 3100 },
      { name: 'Microsoft', code: 'MSFT', amount: 1400 },
      { name: 'Amazon', code: 'AMZN', amount: 2500 },
      { name: 'Nvidia', code: 'NVDA', amount: 4400 },
      { name: 'Meta', code: 'META', amount: 800 },
      { name: 'Visa', code: 'V', amount: 1200 },
      { name: 'JPMorgan Chase', code: 'JPM', amount: 1400 },
      { name: 'Johnson & Johnson', code: 'JNJ', amount: 600 },
      { name: 'Walmart', code: 'WMT', amount: 900 },
      { name: 'UnitedHealth', code: 'UNH', amount: 800 },
      { name: 'Home Depot', code: 'HD', amount: 600 },
      { name: 'Walt Disney', code: 'DIS', amount: 800 },
      { name: 'PayPal', code: 'PYPL', amount: 750 },
      { name: 'Netflix', code: 'NFLX', amount: 500 },
      { name: 'Pfizer', code: 'PFE', amount: 400 },
      { name: 'Coca-Cola', code: 'KO', amount: 500 },
      { name: 'PepsiCo', code: 'PEP', amount: 600 },
      { name: 'Merck', code: 'MRK', amount: 400 },
      { name: 'Intel', code: 'INTC', amount: 600 },
      { name: 'Cisco', code: 'CSCO', amount: 400 },
      { name: 'ExxonMobil', code: 'XOM', amount: 500 },
      { name: 'Chevron', code: 'CVX', amount: 500 },
      { name: 'Abbott Laboratories', code: 'ABT', amount: 400 },
    ],
  },
];

export const getStockLevel = (userBalance: number): StockLevel | null => {
  if (userBalance > StockLevels[StockLevels.length-1].end) {
    return StockLevels[StockLevels.length-1];
  }
  const v = StockLevels.find(level => userBalance >= level.start && userBalance <= level.end)
  return v ? v : null;
};

export interface BuyableCryptoCurrency {
  code: string;
  name: string;
  cgkcode: string; // code for coingecko
}

export const buyableCryptoCurrencyList: BuyableCryptoCurrency[] = [
  { code: 'BTC', name: 'Bitcoin', cgkcode: 'bitcoin' },
  { code: 'ETH', name: 'Ethereum', cgkcode: 'ethereum' },
  { code: 'USDT', name: 'Tether', cgkcode: 'tether' },
  { code: 'XRP', name: 'XRP', cgkcode: 'ripple' },
  { code: 'BNB', name: 'BNB', cgkcode: 'binancecoin' },
  { code: 'SOL', name: 'Solana', cgkcode: 'solana' },
  { code: 'ADA', name: 'Cardano', cgkcode: 'cardano' },
  { code: 'DOGE', name: 'Dogecoin', cgkcode: 'dogecoin' },
  { code: 'SHIB', name: 'Shiba Inu', cgkcode: 'shiba-inu' },
  { code: 'AVAX', name: 'Avalanche', cgkcode: 'avalanche-2' },
];
