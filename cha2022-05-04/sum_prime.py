"""
given an integer array and your task is to return the sum of elements occupying prime-numbered indices.

The first element of the array is at index 0.
"""

def is_prime(n):
    if n < 3: return n == 2
    if not n%2: return False
    for i in range(3, int(n**0.5 + 1), 2):
        if not n%i: return False
    return True

def total(arr):
    return sum(e for c, e in enumerate(arr) if is_prime(c))
