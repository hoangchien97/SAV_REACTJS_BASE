export const LANGUAGES = [
  {
    code: 'de',
    name: 'Français',
    countryCode: 'de',
  },
  {
    code: 'en',
    name: 'English',
    countryCode: 'en',
  },
  {
    code: 'vi',
    name: 'Vietnamese',
    countryCode: 'vi',
  },
];

export const REGEX = {
  ADDRESS_ETHEREUM: /^(0x)?[0-9a-f]{40}$/i,
  ADDRESS_WAX: /^[aA-zZ1-5.\s]+$/,
  PHONE_NUMBER: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
};
