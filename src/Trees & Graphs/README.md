# Minimal Tree

Given a sorted (increasing order) array wiht unique integer elements, write an algorithm to create a binary search tree with minimal height

My approach: Since we know the list we're given is sorted and the values are unique. We can do a binary search on the list and create the nodes as we go. We can also use recursion to make this problem very simple.

Runtime: O(n)
Memory: O(logn) since we're using recursion to create the tree and the depth will never be larger than logn
