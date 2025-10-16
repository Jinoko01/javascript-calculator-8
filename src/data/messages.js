export const SYSTEM_MESSAGE = Object.freeze({
  INPUT: '덧셈할 문자열을 입력해 주세요.\n',
});

const ERROR_PREFIX = '[ERROR] ';
export const ERROR_MESSAGE = Object.freeze({
  INVALID_TYPE: `${ERROR_PREFIX}문자열이 아닌 입력값이 있습니다.`,
  INPUT_EMPTY_STRING: `${ERROR_PREFIX}입력값이 올바르지 않습니다.`,
  INVALID_CUSTOM_DELIMITER_SETTING: `${ERROR_PREFIX}커스텀 구분자 설정이 잘못되었습니다.`,
  INVALID_CUSTOM_DELIMITER_SETTING_LENGTH: `${ERROR_PREFIX}커스텀 구분자는 1글자만 가능합니다.`,
  INVALID_CUSTOM_DELIMITER_SETTING_CONTENT: `${ERROR_PREFIX}커스텀 구분자는 숫자나 공백을 사용할 수 없습니다.`,
  INVALID_CUSTOM_DELIMITER_SETTING_BASE_CHARACTER: `${ERROR_PREFIX}기본 구분자는 커스텀 구분자로 설정할 수 없습니다.`,
  INVALID_NUMBER: `${ERROR_PREFIX}커스텀 구분자가 아닌 문자가 포함되어 있습니다.`,
});
