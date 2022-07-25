# Kth To Last Node

Write a function that returns the kth to last node of a singly linked list.

My solution: Create a slow and fast pointer. The Fast pointer will be k nodes ahead of the slow pointer. Once the fast pointer reaches the end of the list we know that slow will be kth from last.

Runtime: O(n)
Memory: O(1)
