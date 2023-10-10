using Microsoft.EntityFrameworkCore;
using pizzareact.Models;

namespace pizzareact.Data.Services
{
    public class CartService
    {
        private readonly ApiDbContext _context;

        public CartService(ApiDbContext context)
        {
            _context = context;
        }

        public async Task<double> GetPizzaPrice(CartItem item)
        {
            Size size = await _context.Sizes.FirstOrDefaultAsync(s => s.Id == item.SizeId);

            double toppingPrice = 0;

            foreach (int id in item.ToppingIds)
            {
                Topping topping = await _context.Toppings.FirstOrDefaultAsync(t => t.Id == id);
                toppingPrice += topping.Price;
            }

            return size.Price + toppingPrice;
        }
    }
}
