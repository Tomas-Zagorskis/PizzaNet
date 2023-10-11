using Microsoft.EntityFrameworkCore;
using pizzareact.Models;

namespace pizzareact.Data {
    public class ApiDbContext : DbContext {

        public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            // Relationship between Order and CartItem
            modelBuilder.Entity<Order>()
                .HasMany(o => o.CartItems)
                .WithOne()
                .HasForeignKey(ci => ci.OrderId);

            // Relationship between CartItem and Topping
            modelBuilder.Entity<CartItem>()
                .HasMany(ci => ci.Toppings)
                .WithOne()
                .HasForeignKey(t => t.CartItemId);


            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Pizza> Pizzas { get; set; }
        public DbSet<Size> Sizes { get; set; }
        public DbSet<Topping> Toppings { get; set; }
        public DbSet<CartItem> CartItems { get; set; }
        public DbSet<Order> Orders { get; set; }

    }
}
