export function formatDateString(dateString: string) {
  // Create a new Date object from the input string
  const date = new Date(dateString);

  // Options for formatting
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long', // Use 'short' for abbreviated month names
    day: 'numeric'
  };

  // Format the date using Intl.DateTimeFormat
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

// Example usage:
const formattedDate = formatDateString("2024-03-18T16:01:31Z");
console.log(formattedDate); // Output: "March 18, 2024"