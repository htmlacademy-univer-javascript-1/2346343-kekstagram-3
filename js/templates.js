const NAMES = [
  'Софрон Басов',
  'Arthas',
  'Сержант Табуретка',
  'Даниил Кирпич',
  'Шамиль Блинк',
  'Леха Бладсикер',
  'Деймон Сальватор',
  'Альберт Энштейн',
  'Фанат Моргенштерна'
];

const MESSAGES = [
  'Прекрасная фотокарточка!',
  'Это моя любимая фотокарточка.',
  'Уверенный среднячек на 6 из 10.',
  'Совсем не впечатлило.',
  'Скучная фотокарточка, мусор одним словом.',
  'Я тавой давний фанат! Не слушай хейтеров, как всегда великолепная фотокарточка!!!'
];

const DESCRIPTIONS = [
  'Мама фоткала',
  'Когда я смотрю на эту фотокарточку, я начинаю понимать истинную красоту мироздания',
  'Клубничное настроение)'
];


const CountLike = {
  MIN: 15,
  MAX: 200
};

const AvatarNumber = {
  MIN: 1,
  MAX: 6
};

const CountComment = {
  MIN: 0,
  MAX: 25
};

const DEFAULT_RENDERED_COMMENTS = 5;
const MAX_COUNT_PHOTOS = 25;
const STEP_ADDED_COMMENTS = 5;
const MAX_STRING_LENGTH = 140;
const MAX_HASHTAG_COUNT = 5;
const MAX_HASHTAG_LENGTH = 20;

const ErrorMessage = {
  SEPARETED_BY_SPASES: 'Хэш-теги должны разделяться пробелами',
  START_WITH: 'Хэш-тег должен начинаться с символа #',
  NO_REPEAT: 'Хэш-теги не должны повторяться',
  HASHTAG_MAX_LENTH: `Максимальная длина одного хэш-тега ${MAX_HASHTAG_LENGTH} символов, включая #`,
  MAX_COUNT_HASHTAG: `Нельзя указать больше ${MAX_HASHTAG_COUNT} хэш-тегов`,
  UNACCEPTABLE_SYMBOLS: 'Хэш-тег содержит недопустимые символы',
  COMMENT_MAX_LENGTH: `Максимальная длина комментария ${MAX_STRING_LENGTH} символов`
};

export { NAMES, MESSAGES, DESCRIPTIONS, CountLike, AvatarNumber, DEFAULT_RENDERED_COMMENTS, CountComment,
  MAX_COUNT_PHOTOS, STEP_ADDED_COMMENTS, MAX_STRING_LENGTH, MAX_HASHTAG_COUNT,MAX_HASHTAG_LENGTH, ErrorMessage };
