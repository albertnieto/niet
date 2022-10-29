from secrets import token_urlsafe

# Use of secrets libray to create an urlsafe ID
def random_id_field(nbytes=7):
    return token_urlsafe(nbytes)