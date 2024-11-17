package com.example.utilities;

/**
 * This class provides utility methods for string manipulation.
 * <p>
 * It includes methods for reversing strings, changing case, and checking for
 * palindromes.
 * </p>
 * 
 * @author John Doe
 * @version 1.0
 */
public class Test {

    // Constants
    public static final String EMPTY = "";

    /**
     * Reverses the given string.
     *
     * @param input The string to be reversed.
     * @return A new string that is the reverse of the input.
     */
    public static String reverse(String input) {
        // Check for null or empty string
        if (input == null || input.isEmpty()) {
            // Return the input if it's null or empty
            return input;
        }

        // Convert the string to a character array
        char[] characters = input.toCharArray();
        int left = 0;
        int right = characters.length - 1;

        // Swap characters until the middle of the array is reached
        while (left < right) {
            // Swap the characters at positions left and right
            char temp = characters[left];
            characters[left] = characters[right];
            characters[right] = temp;

            // Move towards middle
            left++;
            right--;
        }

        // Return the reversed string
        return new String(characters);
    }

    // /**
    //  * Checks if the given string is a palindrome.
    //  *
    //  * @param input The string to check.
    //  * @return {@code true} if the string is a palindrome, {@code false} otherwise.
    //  * @throws IllegalArgumentException if the input is null.
    //  */
    // public static boolean isPalindrome(String input) {
    //     // Throw exception if input is null
    //     if (input == null) {
    //         throw new IllegalArgumentException("Input cannot be null");
    //     }
    //
    //     // Remove whitespace and convert to lowercase
    //     String sanitized = input.replaceAll("\\s+", "").toLowerCase();
    //
    //     // Compare the string to its reverse
    //     return sanitized.equals(reverse(sanitized));
    // }

    /**
     * Converts the input string to uppercase.
     * <p>
     * Note: This method uses the default locale.
     * </p>
     *
     * @param input The string to convert.
     * @return The uppercase version of the input string.
     * @deprecated Use {@link #toUpperCase(String, Locale)} instead.
     */
    @Deprecated
    public static String toUpperCase(String input) {
        // Convert to uppercase using default locale
        return input != null ? input.toUpperCase() : null;
    }

    /**
     * Converts the input string to uppercase using the specified locale.
     *
     * @param input  The string to convert.
     * @param locale The locale to use.
     * @return The uppercase version of the input string.
     * @see java.util.Locale
     */
    public static String toUpperCase(String input, java.util.Locale locale) {
        // Convert to uppercase using specified locale
        return input != null ? input.toUpperCase(locale) : null;
    }

    /*
     * Multi-line comment example:
     * The following method demonstrates a simple use of recursion.
     * It calculates the factorial of a given number.
     */

    /**
     * Calculates the factorial of a non-negative integer.
     *
     * @param n The number to calculate the factorial for.
     * @return The factorial of n.
     * @throws IllegalArgumentException if n is negative.
     */
    public static long factorial(int n) {
        // Check if n is negative
        if (n < 0) {
            // Factorial is not defined for negative numbers
            throw new IllegalArgumentException("n must be non-negative");
        }

        // Base case: factorial of 0 or 1 is 1
        if (n == 0 || n == 1) {
            return 1;
        }

        // Recursive case: n * factorial of (n - 1)
        return n * factorial(n - 1);
    }

    // TODO: Implement the method for checking if a string is an anagram

    // FIXME: Handle cases where the input string contains special characters

    /**
     * Main method for testing the utility methods.
     *
     * @param args Command-line arguments.
     * @throws Exception if an error occurs during execution.
     */
    public static void main(String[] args) throws Exception {
        // Example usage of reverse method
        String original = "Hello World";
        String reversed = reverse(original);
        System.out.println("Original: " + original);
        System.out.println("Reversed: " + reversed);

        // Example usage of isPalindrome method
        String palindromeTest = "A man a plan a canal Panama";
        boolean isPalin = isPalindrome(palindromeTest);
        System.out.println("\"" + palindromeTest + "\" is a palindrome: " + isPalin);

        // Example usage of factorial method
        int number = 5;
        long fact = factorial(number);
        System.out.println("Factorial of " + number + " is " + fact);

        // Using deprecated method
        String upper = toUpperCase(original);
        System.out.println("Uppercase: " + upper);
    }
}
