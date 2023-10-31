// Function to prompt user for password options
function generatePassword() {
  // Define character sets for different options
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const specialChars = "!@#$%^&*()_+";
  const numbers = "0123456789";

  // Prompt the user for password options
  const length = parseInt(prompt("Enter a password length between 8 - 128 characters:"));
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Password length must be between 8 and 128 characters.");
    return;
  }

  const includeLowerCase = confirm("Include lowercase letters? OK = Yes, Cancel = No");
  const includeUpperCase = confirm("Include uppercase letters? OK = Yes, Cancel = No");
  const includeSpecialChars = confirm("Include special characters? OK = Yes, Cancel = No");
  const includeNumbers = confirm("Include numbers? OK = Yes, Cancel = No");

  if (!includeLowerCase && !includeUpperCase && !includeSpecialChars && !includeNumbers) {
    alert("You must select at least one character type for the password.");
    return;
  }

  // Create a character pool based on user options
  let charPool = "";
  if (includeLowerCase) charPool += lowerCaseChars;
  if (includeUpperCase) charPool += upperCaseChars;
  if (includeSpecialChars) charPool += specialChars;
  if (includeNumbers) charPool += numbers;

  // Generate the random password
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charPool.length);
    password += charPool.charAt(randomIndex);
  }

  return password;
}

// Call the function to generate a password
const generatedPassword = generatePassword();
if (generatedPassword) {
  alert("Your randomly generated password is: " + generatedPassword);
}

document.getElementById("generate").addEventListener("click", function() {
  const generatedPassword = generatePassword();
  if (generatePassword) {
    alert("Your randomly generated password is " + generatedPassword);
  }
});