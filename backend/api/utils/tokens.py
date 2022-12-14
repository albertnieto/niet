from secrets import token_urlsafe
import random


# Use of secrets libray to create an urlsafe ID
def random_id_field(nbytes=7):
    return token_urlsafe(nbytes)


def random_number_NM_digits(n=7, m=10):
    random.seed()
    range_start = 10 ** (n - 1)
    range_end = (10**m) - 1
    return random.randint(range_start, range_end)
