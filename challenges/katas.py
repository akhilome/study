""" Start solving python katas """


# Number of People in the Bus
# https://www.codewars.com/kata/5648b12ce68d9daa6b000099
def number(bus_stops):
    folks_left = 0
    for get_in, get_out in bus_stops:
        folks_left = folks_left + (get_in - get_out)

    return folks_left


# Printer Errors
# https://www.codewars.com/kata/printer-errors
def printer_error(s):
    str_len = len(s)
    len_err = 0
    for char in s:
        if (ord(char) >= 110 and ord(char) <= 122):
            len_err += 1

    return f"{len_err}/{str_len}"
