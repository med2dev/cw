from math import ceil, lgamma, log

def count(n):
    return ceil(lgamma(n+1)/log(10))
