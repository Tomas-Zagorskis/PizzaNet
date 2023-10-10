using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
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

            if (item.Toppings.Count() == 0) return size.Price;

            double toppingPrice = 0;

            foreach (Topping topping in item.Toppings)
            {
                toppingPrice += topping.Price;
            }

            if (item.Toppings.Count() > 3) {
                return Math.Round((size.Price + toppingPrice) * 0.9, 2 , MidpointRounding.AwayFromZero);
            }
            return size.Price + toppingPrice;
        }
        
        public async Task AddCartItemAsync(CartItem item)
        {
            await _context.CartItems.AddAsync(item);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteCartItemAsync(int id) {
            CartItem cartItem = await _context.CartItems.FirstOrDefaultAsync(ci => ci.Id == id);
            EntityEntry entityEntry = _context.Entry<CartItem>(cartItem);
            entityEntry.State = EntityState.Deleted;

            await _context.SaveChangesAsync();
        }
        
        public async Task AddOrderAsync(Order order) {
            await _context.Orders.AddAsync(order);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Order>> GetAllOrdersAsync() {
            return await _context.Orders.ToListAsync();
        }
                
    }
}
