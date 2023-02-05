import { generateShare, recoverSecret } from "../index";
test("init test", () => {
  const secret =
    "f5854cd31154ad3e43c339a2d4b02621be5a8e1392ab9d5d92c79934b383178c";
  console.log(secret.length);
  const shares = generateShare(secret);
  delete shares[3];
  const retrieved = recoverSecret(shares);
  expect(retrieved).toBe(secret);
});
