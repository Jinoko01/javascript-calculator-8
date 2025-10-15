const SYSTEM_MESSAGE = Object.freeze({
  INPUT: '덧셈할 문자열을 입력해 주세요.\n',
});

const ERROR_PREFIX = '[ERROR] ';
const ERROR_MESSAGE = Object.freeze({
  INVALID_TYPE: `${ERROR_PREFIX}문자열이 아닌 입력값이 있습니다.`,
  INPUT_EMPTY_STRING: `${ERROR_PREFIX}입력값이 올바르지 않습니다.`,
});
