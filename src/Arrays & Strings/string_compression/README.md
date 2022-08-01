# String Compression

Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabccccaaa would become a2b1c5. You can assume the string has only uppercase and lowercase letters (a-z).

Runtime: O(nlogn) O(n) for collecting the frequencies. Then O(nlogn) since we have to sort the string
Memory: O(1) since there are only a limited number of characters
