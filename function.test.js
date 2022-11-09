const { stringLength, reverseString, capitalize } = require("./function");

it("characters count", () => {
  expect(stringLength("yes")).toBe(3);
});

it("characters count", () => {
  expect(stringLength("")).toBe(0);
});


it("string reverse", () => {
  expect(reverseString("HELLO")).toBe("OLLEH");
});


it("Capitalize string", () => {
  expect(capitalize("morning")).toBe("Morning");
});
