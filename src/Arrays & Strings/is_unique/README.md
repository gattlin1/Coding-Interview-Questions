# Is Unique

Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

My approach: Since we cannot use additional data structures, what I decided to do is sort the string's characters O(nlogn). You can then iterate over the string and see if any of the adjacent characters are equal O(n).

Overall runtime: O(nlogn)
