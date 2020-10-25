const greeting = (name) => {
  return `Hello, ${name}!`;
};

describe("greeting", () => {
  it("says hello", () => {
    expect(greeting("Jest")).toBe("Hello, Jest!");
  });
});
