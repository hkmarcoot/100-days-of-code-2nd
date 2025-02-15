from datetime import datetime as dt
from decimal import Decimal
from random import randint, choice
import custom_module

date = dt.today().date()
time = dt.now().time()

print("Date: " + str(date))
print("Time: " + str(time))

base_cost = Decimal('1000.00')
target_year = randint(0, int(date.strftime("%Y")))
current_year = int(date.strftime("%Y"))
year_diff = abs(target_year - current_year)
print(year_diff)
final_cost = Decimal(base_cost) + 200 * Decimal(year_diff)
print(final_cost)
possible_destination = ["HK", "UK", "US", "EU"]
selected_destination = choice(possible_destination)
print(selected_destination)

print(custom_module.generate_time_travel_message(target_year, selected_destination, final_cost))