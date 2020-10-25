const greeting = (name='Stranger') => {
  return `Hello, ${name}!`;
};

describe("greeting", () => {
  it("says hello", () => {
    expect(greeting("Jest")).toBe("Hello, Jest!");
  });
  it("says hello stranger when name not provided",() => {
    expect(greeting()).toBe("Hello, Stranger!");
  })
});
