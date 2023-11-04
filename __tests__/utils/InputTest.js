import Input from '../../src/utils/Input';
import { Console } from '@woowacourse/mission-utils';

describe('Input', () => {
  beforeEach(() => {
    Console.readLineAsync = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getCost', () => {
    test('구입금액을 입력해 주세요. 라는 문구를 출력한다.', async () => {
      // given
      const expectedMessage = '구입금액을 입력해 주세요.';
      Console.readLineAsync.mockResolvedValue('1000');

      // when
      await Input.getCost();

      // then
      expect(Console.readLineAsync).toHaveBeenCalledWith(expectedMessage);
    });

    test('입력받은 값이 정수가 아니라면 에러를 던진다.', async () => {
      // given
      Console.readLineAsync.mockResolvedValue('1.1');

      // when
      const result = Input.getCost();

      // then
      await expect(result).rejects.toThrow('[ERROR]');
    });
  });

  describe('readIntegerAsync', () => {
    test('사용자에게 메시지를 출력한다.', () => {
      // given
      const expectedMessage = '메시지';
      Console.readLineAsync.mockResolvedValue('1');

      // when
      Input.readIntegerAsync(expectedMessage);

      // then
      expect(Console.readLineAsync).toHaveBeenCalledWith(expectedMessage);
    });

    test('입력받은 값이 정수가 아니라면 에러를 던진다.', async () => {
      // given
      Console.readLineAsync.mockResolvedValue('1.1');

      // when
      const result = Input.readIntegerAsync();

      // then
      await expect(result).rejects.toThrow('[ERROR]');
    });
  });
});
