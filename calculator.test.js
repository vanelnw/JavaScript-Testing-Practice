class Calculator {
  constructor() {}

  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  divide(a, b) {
    return a / b;
  }
  multiply(a, b) {
    return a * b;
  }
}

const MyCalculator = new Calculator();

describe("calculator", () => {
  test("add", () => {
    expect(MyCalculator.add(1, 2)).toBe(3);
  });
  test("add", () => {
    expect(MyCalculator.add(18, 2)).toBe(21);
  });
  test("add", () => {
    expect(MyCalculator.add(100, 200)).toBe(300);
  });

  test("subtract", () => {
    expect(MyCalculator.subtract(3, 2)).toBe(1);
  });
  test("subtract", () => {
    expect(MyCalculator.subtract(4, 7)).toBe(-3);
  });
  test("subtract", () => {
    expect(MyCalculator.subtract(18, 7)).toBe(11);
  });

  test("divide", () => {
    expect(MyCalculator.divide(10, 5)).toBe(2);
  });

  test("multiply", () => {
    expect(MyCalculator.multiply(2, 2)).toBe(4);
  });
  test("multiply", () => {
    expect(MyCalculator.multiply(-2, 5)).toBe(-10);
  });
  test("multiply", () => {
    expect(MyCalculator.multiply(12, 2)).toBe(24);
  });
});
