# Check Permutation

Given two strings, write a method to decide if one is a permutation of the other

My approach: If we knew the characters were standard english characters then we could create an array the size of the alphabet (26 if casing doesn't matter or 52 if we they are considered unique) and store frequencies of the letters. This assumes a lot so another approach is to create a hashmap, loop through both strings and store the frequencies of the letters. This is more flexible because it doesn't need to assume the letters are english letters. Then we loop through the hashmaps and ensure they have equal frequencies.

Runtime: O(n);
Memory: O(n);
