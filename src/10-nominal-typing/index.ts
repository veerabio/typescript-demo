type ValidatedInputString = string & { __brand: "User Input Post Validation" };

const validateUserInput = (input: string) => {
  const simpleValidatedInput = input.replace(/\</g, "≤");
  return simpleValidatedInput as ValidatedInputString;
};

const printName = (name: ValidatedInputString) => {
  console.log(name);
};

const rawInput = "\n<script>alert('bobby tables')</script>";
const validatedInput = validateUserInput(rawInput);
printName(validatedInput);

printName(rawInput);